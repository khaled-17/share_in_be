import { ShareenService } from './shareen.service';
import { CreateShareenDto } from './dto/shareen.dto';
export declare class ShareenController {
    private shareenService;
    constructor(shareenService: ShareenService);
    findAll(query: any): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            created_at: Date;
        }[];
    }>;
    create(createShareenDto: CreateShareenDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            created_at: Date;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
