import { NotificationsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/aplication/use-cases/send-notification';
import { DatabasesModule } from '../database/database.module';

@Module({
    imports: [DatabasesModule],
    controllers: [NotificationsController],
    providers: [SendNotification],
})
export class HttpModule{}