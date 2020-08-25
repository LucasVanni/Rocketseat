import { Router } from 'express';
/*
parseIso => Converte uma string que vem do front-end
        para um formato date nativo do JavaScript.
    startOfHour => Pega uma data qualquer e transforma os minutos como sendo 0, segundos como sendo 0, horas como sendo 0. coloca no começo da hora.
*/
import { parseISO, startOfHour, isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

const routes = Router();

const appointments: Appointment[] = [];

// Registrando reserva
routes.post('/', (req, res) => {
    const { provider, date } = req.body;

    const parsedDate = startOfHour(parseISO(date));

    const findAppointmentInSameDate = appointments.find(appointment =>
        isEqual(parsedDate, appointment.date),
    );

    if (findAppointmentInSameDate) {
        return res
            .status(400)
            .json({ message: 'This appointment is already booked' });
    }

    const appointment = new Appointment(provider, parsedDate);

    appointments.push(appointment);

    return res.send(appointment);
});

export default routes;
