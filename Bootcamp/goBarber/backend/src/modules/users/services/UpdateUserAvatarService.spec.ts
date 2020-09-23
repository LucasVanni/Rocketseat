import AppError from '@shared/errors/AppError';

import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import FakeUserRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateUserAvatarService from './UpdateUserAvatarService';

describe('UpdateUserAvatar', () => {
    it('should be able to update avatar', async () => {
        const fakeStorageProvider = new FakeStorageProvider();
        const fakeUserRepository = new FakeUserRepository();

        const updateUserAvatar = new UpdateUserAvatarService(
            fakeUserRepository,
            fakeStorageProvider,
        );

        const user = await fakeUserRepository.create({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
        });

        await updateUserAvatar.execute({
            user_id: user.id,
            avatarFilename: 'avatar.jpg',
        });

        expect(user.avatar).toBe('avatar.jpg');
    });

    it('should not be able to update avatar from non existing user', async () => {
        const fakeStorageProvider = new FakeStorageProvider();
        const fakeUserRepository = new FakeUserRepository();

        const updateUserAvatar = new UpdateUserAvatarService(
            fakeUserRepository,
            fakeStorageProvider,
        );

        await expect(
            updateUserAvatar.execute({
                user_id: 'none-existing-user',
                avatarFilename: 'avatar.jpg',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });

    it('should delete old avatar when updating new one', async () => {
        const fakeStorageProvider = new FakeStorageProvider();
        const fakeUserRepository = new FakeUserRepository();

        const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

        const updateUserAvatar = new UpdateUserAvatarService(
            fakeUserRepository,
            fakeStorageProvider,
        );

        const user = await fakeUserRepository.create({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
        });

        await updateUserAvatar.execute({
            user_id: user.id,
            avatarFilename: 'avatar.jpg',
        });

        await updateUserAvatar.execute({
            user_id: user.id,
            avatarFilename: 'avatar2.jpg',
        });

        expect(deleteFile).toHaveBeenCalledWith('avatar.jpg');

        expect(user.avatar).toBe('avatar2.jpg');
    });
});
