import IUserWithoutPasswordDTO from '../dtos/IUserWithoutPasswordDTO';
import User from '../infra/typeorm/entities/User';

export default class UserMap {
    public static UserWithoutPassword(user: User): IUserWithoutPasswordDTO {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            created_at: user.created_at,
            updated_at: user.updated_at,
        };
    }
}
