import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userRouter = Router();

const usersController = new UsersController();
const userAvatarsController = new UserAvatarController();

const upload = multer(uploadConfig);

userRouter.post('/', usersController.create);

userRouter.patch(
    '/avatar',
    ensureAuthenticated,
    upload.single('avatar'),
    userAvatarsController.update,
);

export default userRouter;
