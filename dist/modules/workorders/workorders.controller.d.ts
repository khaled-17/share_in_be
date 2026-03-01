import { WorkOrdersService } from './workorders.service';
import { CreateWorkOrderDto, UpdateWorkOrderDto } from './dto/workorder.dto';
export declare class WorkOrdersController {
    private workOrdersService;
    constructor(workOrdersService: WorkOrdersService);
    findAll(query: any): Promise<{
        success: boolean;
        message: string;
        data: ({
            quotation: {
                id: number;
                customer_id: string;
                project_type_id: string | null;
                project_manager: string | null;
                project_name: string | null;
                quote_date: string;
                delivery_date: string | null;
                totalamount: number;
                paid_adv: number | null;
                adv_date: string | null;
                receipt_no: string | null;
                status: string;
            };
            customer: {
                customer_id: string;
                created_at: Date;
                name: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
            };
        } & {
            id: number;
            order_code: string;
            quotation_id: number;
            customer_id: string;
            created_at: Date;
        })[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            quotation: {
                id: number;
                customer_id: string;
                project_type_id: string | null;
                project_manager: string | null;
                project_name: string | null;
                quote_date: string;
                delivery_date: string | null;
                totalamount: number;
                paid_adv: number | null;
                adv_date: string | null;
                receipt_no: string | null;
                status: string;
            };
            customer: {
                customer_id: string;
                created_at: Date;
                name: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
            };
        } & {
            id: number;
            order_code: string;
            quotation_id: number;
            customer_id: string;
            created_at: Date;
        };
    }>;
    create(createWorkOrderDto: CreateWorkOrderDto): Promise<{
        success: boolean;
        message: string;
        data: {
            quotation: {
                id: number;
                customer_id: string;
                project_type_id: string | null;
                project_manager: string | null;
                project_name: string | null;
                quote_date: string;
                delivery_date: string | null;
                totalamount: number;
                paid_adv: number | null;
                adv_date: string | null;
                receipt_no: string | null;
                status: string;
            };
            customer: {
                customer_id: string;
                created_at: Date;
                name: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
            };
        } & {
            id: number;
            order_code: string;
            quotation_id: number;
            customer_id: string;
            created_at: Date;
        };
    }>;
    update(id: number, updateWorkOrderDto: UpdateWorkOrderDto): Promise<{
        success: boolean;
        message: string;
        data: {
            quotation: {
                id: number;
                customer_id: string;
                project_type_id: string | null;
                project_manager: string | null;
                project_name: string | null;
                quote_date: string;
                delivery_date: string | null;
                totalamount: number;
                paid_adv: number | null;
                adv_date: string | null;
                receipt_no: string | null;
                status: string;
            };
            customer: {
                customer_id: string;
                created_at: Date;
                name: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
            };
        } & {
            id: number;
            order_code: string;
            quotation_id: number;
            customer_id: string;
            created_at: Date;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
