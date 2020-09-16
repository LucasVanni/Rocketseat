import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import AppointmentsController from '../controllers/AppointmentsController';

const appointmentRoutes = Router();
const appointmentsController = new AppointmentsController();

appointmentRoutes.use(ensureAuthenticated);

// appointmentRoutes.get('/', async (_req, res) => {
//     const appointmentsRepository = getCustomRepository(AppointmentsRepository);

//     const appointments = await appointmentsRepository.find();

//     return res.json(appointments);
// });

appointmentRoutes.post('/', appointmentsController.create);

export default appointmentRoutes;
