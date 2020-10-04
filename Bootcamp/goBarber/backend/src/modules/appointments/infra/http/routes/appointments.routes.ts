import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentRoutes = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentRoutes.use(ensureAuthenticated);

appointmentRoutes.post('/', appointmentsController.create);
appointmentRoutes.get('/me', providerAppointmentsController.index);

export default appointmentRoutes;
