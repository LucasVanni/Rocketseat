import { ObjectID } from 'mongodb';

import ICreateNotificationsDTO from '@modules/notifications/dtos/ICreateNotificationsDTO';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';

import Notification from '../../infra/typeorm/schemas/Notification';

class NotificationsRepository implements INotificationsRepository {
    private notification: Notification[] = [];

    public async create({
        content,
        recipient_id,
    }: ICreateNotificationsDTO): Promise<Notification> {
        const notification = new Notification();

        Object.assign(notification, {
            id: new ObjectID(),
            content,
            recipient_id,
        });

        this.notification.push(notification);

        return notification;
    }
}

export default NotificationsRepository;
