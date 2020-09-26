import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import ProvidersController from '../controllers/ProvidersController';

const providersRoutes = Router();
const providersController = new ProvidersController();

providersRoutes.use(ensureAuthenticated);

providersRoutes.get('/', providersController.index);

export default providersRoutes;
