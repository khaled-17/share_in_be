import { WorkOrdersService } from './workorders.service';
import { CreateWorkOrderDto, UpdateWorkOrderDto } from './dto/workorder.dto';
export declare class WorkOrdersController {
    private workOrdersService;
    constructor(workOrdersService: WorkOrdersService);
    findAll(query: Record<string, string>): Promise<{
        success: boolean;
        message: string;
        data: ({
            quotation: {
                id: number;
                customer_id: string;
                receipt_no: string | null;
                project_type_id: string | null;
                project_manager: string | null;
                project_name: string | null;
                quote_date: string;
                delivery_date: string | null;
                totalamount: number;
                paid_adv: number | null;
                adv_date: string | null;
                status: string;
            };
            customer: {
                name: string;
                tenant_id: number;
                customer_id: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                created_by: number | null;
            };
        } & {
            id: number;
            customer_id: string;
            created_at: Date;
            quotation_id: number;
            order_code: string;
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
                project_type_id: string | null;
                project_manager: string | null;
                project_name: string | null;
                quote_date: string;
                delivery_date: string | null;
                totalamount: number;
                paid_adv: number | null;
                adv_date: string | null;
                status: string;
            };
            customer: {
                name: string;
                tenant_id: number;
                customer_id: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                created_by: number | null;
            };
        } & {
            id: number;
            customer_id: string;
            created_at: Date;
            quotation_id: number;
            order_code: string;
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
                project_type_id: string | null;
                project_manager: string | null;
                project_name: string | null;
                quote_date: string;
                delivery_date: string | null;
                totalamount: number;
                paid_adv: number | null;
                adv_date: string | null;
                status: string;
            };
            customer: {
                name: string;
                tenant_id: number;
                customer_id: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                created_by: number | null;
            };
        } & {
            id: number;
            customer_id: string;
            created_at: Date;
            quotation_id: number;
            order_code: string;
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
                project_type_id: string | null;
                project_manager: string | null;
                project_name: string | null;
                quote_date: string;
                delivery_date: string | null;
                totalamount: number;
                paid_adv: number | null;
                adv_date: string | null;
                status: string;
            };
            customer: {
                name: string;
                tenant_id: number;
                customer_id: string;
                contact_person: string;
                company_email: string;
                contact_email: string;
                phone: string;
                secondary_phone: string;
                address: string;
                created_at: Date;
                created_by: number | null;
            };
        } & {
            id: number;
            customer_id: string;
            created_at: Date;
            quotation_id: number;
            order_code: string;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
