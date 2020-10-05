import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';
import { classToClass } from 'class-transformer';

export default class ProvidersController {
    public async index(req: Request, res: Response): Promise<Response> {
        const user_id = req.user.id;

        const listProvidersService = container.resolve(ListProvidersService);

        const providers = await listProvidersService.execute({
            user_id,
        });

        return res.json(classToClass(providers));
    }
}
