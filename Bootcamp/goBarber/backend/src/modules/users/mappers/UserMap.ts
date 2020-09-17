import IUserWithoutPasswordDTO from '../dtos/IUserWithoutPasswordDTO';
import User from '../infra/typeorm/entities/User';

export default class UserMap {
    public UserWithoutPassword(user: User): IUserWithoutPasswordDTO {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
        };
    }
}
