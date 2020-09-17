import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

import UserMap from '@modules/users/mappers/UserMap';

const userMap = new UserMap();

export default class UsersController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        const createUser = container.resolve(CreateUserService);

        const user = await createUser.execute({
            name,
            email,
            password,
        });

        const userWithoutPassword = userMap.UserWithoutPassword(user);

        return res.json(userWithoutPassword);
    }
}
