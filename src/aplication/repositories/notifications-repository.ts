import { Notification } from "../entites/notification";

export abstract class NotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
}