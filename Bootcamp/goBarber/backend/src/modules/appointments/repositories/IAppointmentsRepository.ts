import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';

import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepository {
    create({ provider_id, date }: ICreateAppointmentDTO): Promise<Appointment>;
    findByDate(date: Date): Promise<Appointment | undefined>;
}
