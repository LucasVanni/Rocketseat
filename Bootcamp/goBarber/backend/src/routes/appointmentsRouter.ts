/*
    Rotas devem se preocupar em receber a requisição,
    enviar para um arquivo que deverá processar ela
    e devolver uma resposta.
*/
import { Router } from 'express';
/*
parseIso => Converte uma string que vem do front-end
        para um formato date nativo do JavaScript.
    startOfHour => Pega uma data qualquer e transforma os minutos como sendo 0, segundos como sendo 0, horas como sendo 0. coloca no começo da hora.
*/
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../service/CreateAppointmentService';

const appointmentRoutes = Router();

const appointmentsRepository = new AppointmentsRepository();

// Listando reservas
appointmentRoutes.get('/', (req, res) => {
    const appointments = appointmentsRepository.all();

    return res.json(appointments);
});

// Registrando reserva
appointmentRoutes.post('/', (req, res) => {
    try {
        const { provider, date } = req.body;

        const parsedDate = parseISO(date);

        const createAppointment = new CreateAppointmentService(
            appointmentsRepository,
        );

        const appointment = createAppointment.execute({
            provider,
            date: parsedDate,
        });

        return res.json(appointment);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

export default appointmentRoutes;
