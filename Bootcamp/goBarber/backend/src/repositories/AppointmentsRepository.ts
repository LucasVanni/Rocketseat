import { isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
    provider: string;
    date: Date;
}

/*
    Vai conter todas as funções que mexem com o banco de dados.
    Dentro de um repositório vamos buscar as informações persistidas
    no banco de dados.

    Detentor das operações que serão feitas nos dados da aplicação.


    Sempre criado como classe
*/
class AppointmentsRepository {
    /*
     Variável dos appointments
        sendo somente acessada aqui.
     Possuí como tip o Model de Appointment
        que é importado
    */
    private appointment: Appointment[];

    constructor() {
        /*
            Inicializando a variável appointments
                como sendo um array vazio
        */
        this.appointment = [];
    }

    // Método que retorna a lista de todos os agendamentos
    public all(): Appointment[] {
        return this.appointment;
    }

    // Encontra um Appointment em determinada data.
    public findByDate(date: Date): Appointment | null {
        /*
            Se forem iguais o método find retorna o
            Appointment para o findAppointment
        */
        const findAppointment = this.appointment.find(appointment =>
            /*
                Verifica se o date passado como parâmetro
                é o mesmo do o date dentro do appointment.
            */
            isEqual(date, appointment.date),
        );

        /*
            Retorna para o Service.
            Se tiver o appointment ele retornará
            senão retorna um null
        */
        return findAppointment || null;
    }

    /*
        Método para criar um appointment
        Quando criamos métodos no typescript precisamos
            informar o tipo de retorno que ele terá
    */
    public create({ provider, date }: CreateAppointmentDTO): Appointment {
        // Cria um appointment com base no model de Appointment
        const appointment = new Appointment({ provider, date });

        // Salvando na lista criada.
        this.appointment.push(appointment);

        // Retorna o appointment para o routes
        return appointment;
    }
}

export default AppointmentsRepository;
