import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import { sign } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/typeorm/entities/User';

import authConfig from '@config/auth';

interface RequestDTO {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

class AuthenticateUserService {
    public async execute({ email, password }: RequestDTO): Promise<Response> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({ where: { email } });

        if (!user) {
            throw new AppError('Incorrect email/password combination.', 401);
        }

        // Compara se a senha não criptografada é igual a senha criptografada
        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new AppError('Incorrect email/password combination.', 401);
        }

        // Usuário autenticado
        /*
            O primeiro parâmetro (payload) são informações
            do usuário que podem ser usadas depois
            geralmente o que colocamos são as permissões.

            - O segundo parâmetro é uma chave secreta,
            para gerar ela entramos no site do md5 http://www.md5.cz
            digitamos qualquer coisa e copiamos o resultado.

            - O terceiro parâmetro são algumas configurações do token.
                => subject -> id do usuário que gerou esse token
                => expiresIn -> Quanto tempo o token irá durar, não
                    cometer o erro de deixar 999d, por motivos de segurança
                    não queremos que o usuário fique eternamente logado.
        */

        const { subject, expiresIn } = authConfig.jwt;

        const token = sign({}, subject, {
            subject: user.id,
            expiresIn,
        });

        return { user, token };
    }
}

export default AuthenticateUserService;
