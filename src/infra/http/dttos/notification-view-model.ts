import { Notification } from '@application/entites/notification'

export class NotificationViewModel {
    static toHTTP(notification: Notification){
        return {
            id: notification.id,
            content: notification.content.value,
            categories: notification.category,
            recipientId: notification.recipientId,
        };
    }
}