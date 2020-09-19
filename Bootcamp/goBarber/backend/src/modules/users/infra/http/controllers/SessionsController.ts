import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

import UserMap from '@modules/users/mappers/UserMap';

export default class SessionsController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const authenticateUser = container.resolve(AuthenticateUserService);

        const { user, token } = await authenticateUser.execute({
            email,
            password,
        });

        const userWithoutPassword = UserMap.UserWithoutPassword(user);

        return res.json({ userWithoutPassword, token });
    }
}
