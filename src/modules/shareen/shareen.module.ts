import { Module } from '@nestjs/common';
import { ShareenService } from './shareen.service';
import { ShareenController } from './shareen.controller';

@Module({
    providers: [ShareenService],
    controllers: [ShareenController],
})
export class ShareenModule { }
