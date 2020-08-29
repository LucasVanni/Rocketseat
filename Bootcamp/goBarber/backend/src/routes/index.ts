import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();
/*
    Ele vai fazer com que toda rota que começar com
     /appointments seja enviado para dentro do AppointmentsRouter
*/
routes.use('/appointments', appointmentsRouter);

routes.use('/users', usersRouter);

export default routes;
