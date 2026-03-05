import { PrismaService } from '../../prisma/prisma.service';
import { CreateWorkOrderDto, UpdateWorkOrderDto } from './dto/workorder.dto';
export declare class WorkOrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(query?: Record<string, any>): Promise<({
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
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
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
    })[]>;
    findOne(id: number): Promise<{
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
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
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
    }>;
    findByOrderCode(order_code: string): Promise<{
        id: number;
        customer_id: string;
        created_at: Date;
        quotation_id: number;
        order_code: string;
    } | null>;
    create(data: CreateWorkOrderDto): Promise<{
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
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
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
    }>;
    update(id: number, data: UpdateWorkOrderDto): Promise<{
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
            contact_person: string;
            phone: string;
            customer_id: string;
            company_email: string;
            contact_email: string;
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
    }>;
    remove(id: number): Promise<{
        id: number;
        customer_id: string;
        created_at: Date;
        quotation_id: number;
        order_code: string;
    }>;
}
