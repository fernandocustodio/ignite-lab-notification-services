import { NotificationsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { DatabasesModule } from '../database/database.module';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notificaions';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';

@Module({
    imports: [DatabasesModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientNotifications,
        GetRecipientNotifications,
        ReadNotification,
        UnreadNotification,
    ],
})
export class HttpModule{}