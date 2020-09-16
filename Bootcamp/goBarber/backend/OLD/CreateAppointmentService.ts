/*
    startOfHour => Pega uma data qualquer e transforma os minutos como sendo 0,
        segundos como sendo 0, horas como sendo 0. coloca no começo da hora.
*/
import { startOfHour } from 'date-fns';

import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

// A classe Appointment é a estrutura das informações da tabela
import Appointment from '../infra/typeorm/entities/Appointment';

// Ponte entre a tabela Appointments que está no banco de dados e a aplicação
import AppointmentsRepository from '../repositories/AppointmentsRepository';

/*
    Quando estamos recebendo dados direto
    do service chamamos de Request
*/
interface RequestDTO {
    provider_id: string;
    date: Date;
}

// Armazena toda a regra de negócios dos appointments da aplicação
// Sempre terá um único método público
// Service nunca terá acesso a requisição nem a resposta da rota.
class CreateAppointmentService {
    // Variável que será usada na classe.
    // private appointmentsRepository: AppointmentsRepository;

    // Repositório recebido como parâmetro para ser o mesmo.
    /*
        Dependency Inversion => Sempre que o nosso
            service tiver uma dependência externa ao
            invés de instanciar uma nova instancia,
            recebemos ela como parâmetro do nosso
            constructor isso facilitará para que todos
            usem o mesmo repositório.
    */

    /*
        Quando quero que a instância de uma classe
            seja o tipo de um parâmetro de outra classe
            tenho que importar essa classe e passar
            como sendo um tipo
    */
    // constructor(appointmentsRepository: AppointmentsRepository) {
    //     /* Fazemos com que a variável receba o repositório que
    //         veio como parâmetro
    //     */
    //     this.appointmentsRepository = appointmentsRepository;
    // }

    public async execute({
        provider_id,
        date,
    }: RequestDTO): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(
            AppointmentsRepository,
        );

        // Permite que o usuário crie o appointment de hora em hora
        const appointmentDate = startOfHour(date);

        // Passando a hora para o método que irá checar se já tem um agendamento naquela hora
        const findAppointmentInSameDate = await appointmentsRepository.findByDate(
            appointmentDate,
        );

        // Se encontrar irá retornar erro para a rota
        if (findAppointmentInSameDate) {
            // Dá um throw dentro de um erro.
            throw new AppError('This appointment is already booked');
        }

        // ! não vale mais | Retorna o appointment criado no repositório para a variável appointment
        // Somente cria um objeto/instância do appointments, mas não salva
        const appointment = appointmentsRepository.create({
            provider_id,
            date: appointmentDate,
        });

        // Para salvar ( Sempre deveremos esperar o retorno )
        await appointmentsRepository.save(appointment);

        // Retorna para o front end
        return appointment;
    }
}

export default CreateAppointmentService;
