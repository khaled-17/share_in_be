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
                receipt_no: string | null;
                project_manager: string | null;
                project_name: string | null;
                quote_date: string;
                delivery_date: string | null;
                totalamount: number;
                paid_adv: number | null;
                adv_date: string | null;
                status: string;
                project_type_id: string | null;
            };
            customer: {
                name: string;
                contact_person: string;
                phone: string;
                customer_id: string;
                company_email: string;
                contact_email: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
            };
        } & {
            id: number;
            customer_id: string;
            created_at: Date;
            order_code: string;
            quotation_id: number;
        })[];
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        message: string;
        data: {
            quotation: {
                id: number;
                customer_id: string;
                receipt_no: string | null;
                project_manager: string | null;
                project_name: string | null;
                quote_date: string;
                delivery_date: string | null;
                totalamount: number;
                paid_adv: number | null;
                adv_date: string | null;
                status: string;
                project_type_id: string | null;
            };
            customer: {
                name: string;
                contact_person: string;
                phone: string;
                customer_id: string;
                company_email: string;
                contact_email: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
            };
        } & {
            id: number;
            customer_id: string;
            created_at: Date;
            order_code: string;
            quotation_id: number;
        };
    }>;
    create(createWorkOrderDto: CreateWorkOrderDto): Promise<{
        success: boolean;
        message: string;
        data: {
            quotation: {
                id: number;
                customer_id: string;
                receipt_no: string | null;
                project_manager: string | null;
                project_name: string | null;
                quote_date: string;
                delivery_date: string | null;
                totalamount: number;
                paid_adv: number | null;
                adv_date: string | null;
                status: string;
                project_type_id: string | null;
            };
            customer: {
                name: string;
                contact_person: string;
                phone: string;
                customer_id: string;
                company_email: string;
                contact_email: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
            };
        } & {
            id: number;
            customer_id: string;
            created_at: Date;
            order_code: string;
            quotation_id: number;
        };
    }>;
    update(id: number, updateWorkOrderDto: UpdateWorkOrderDto): Promise<{
        success: boolean;
        message: string;
        data: {
            quotation: {
                id: number;
                customer_id: string;
                receipt_no: string | null;
                project_manager: string | null;
                project_name: string | null;
                quote_date: string;
                delivery_date: string | null;
                totalamount: number;
                paid_adv: number | null;
                adv_date: string | null;
                status: string;
                project_type_id: string | null;
            };
            customer: {
                name: string;
                contact_person: string;
                phone: string;
                customer_id: string;
                company_email: string;
                contact_email: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
            };
        } & {
            id: number;
            customer_id: string;
            created_at: Date;
            order_code: string;
            quotation_id: number;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
