/*
    Rotas devem se preocupar em receber a requisição,
    enviar para um arquivo que deverá processar ela
    e devolver uma resposta.
*/
import { Router } from 'express';

import { getCustomRepository } from 'typeorm';

/*
parseIso => Converte uma string que vem do front-end
        para um formato date nativo do JavaScript.
*/
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../service/CreateAppointmentService';

const appointmentRoutes = Router();

// Instanciando repositório
// const appointmentsRepository = new AppointmentsRepository();

// Listando reservas
appointmentRoutes.get('/', async (_req, res) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    // Acessa o método que retornará a lista completa existente no banco de dados.
    // ! const appointments = appointmentsRepository.all();
    const appointments = await appointmentsRepository.find();

    return res.json(appointments);
});

// Registrando reserva
appointmentRoutes.post('/', async (req, res) => {
    // Usado para tratativas de erros. Se deu certo ele caí no try
    try {
        const { provider_id, date } = req.body;

        // Transformando a hora de tipo string para tipo Date
        const parsedDate = parseISO(date);

        /*
            Instânciando o service para criação do appointment,
                passando como parâmetro o mesmo repositório para
                toda aplicação.
        */
        // ! const createAppointment = new CreateAppointmentService(
        // !    appointmentsRepository,
        // ! );
        const createAppointment = new CreateAppointmentService();

        /*
            Faz todo o processo de validação envio,
                criação das informações, toda regra
                de negócios.
        */
        const appointment = await createAppointment.execute({
            provider_id,
            date: parsedDate,
        });

        // Retorna o appointment criado
        return res.json(appointment);
        // Usado para tratativas de erros.Se deu errado caí nesse catch
    } catch (err) {
        // Erro retornado
        return res.status(400).json({ error: err.message });
    }
});

export default appointmentRoutes;
