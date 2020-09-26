import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import AppointmentsController from '../controllers/AppointmentsController';

const appointmentRoutes = Router();
const appointmentsController = new AppointmentsController();

appointmentRoutes.use(ensureAuthenticated);

appointmentRoutes.post('/', appointmentsController.create);

export default appointmentRoutes;
