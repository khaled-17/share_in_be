import { Module } from '@nestjs/common';
import { WorkOrdersService } from './workorders.service';
import { WorkOrdersController } from './workorders.controller';

@Module({
    providers: [WorkOrdersService],
    controllers: [WorkOrdersController],
})
export class WorkOrdersModule { }
