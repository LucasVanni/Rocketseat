import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

import UserMap from '@modules/users/mappers/UserMap';

export default class UserAvatarController {
    public async update(req: Request, res: Response): Promise<Response> {
        const { id: user_id } = req.user;
        const { filename: avatarFilename } = req.file;

        const updateUserAvatar = container.resolve(UpdateUserAvatarService);

        const user = await updateUserAvatar.execute({
            user_id,
            avatarFilename,
        });

        const userWithoutPassword = UserMap.UserWithoutPassword(user);

        return res.json(userWithoutPassword);
    }
}
