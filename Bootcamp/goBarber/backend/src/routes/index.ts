import { Router } from 'express';

import appointmentsRouter from './appointments.routes';

const routes = Router();
/*
    Ele vai fazer com que toda rota que começar com
     /appointments seja enviado para dentro do AppointmentsRouter
*/
routes.use('/appointments', appointmentsRouter);

export default routes;
