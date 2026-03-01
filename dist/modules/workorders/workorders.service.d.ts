import { PrismaService } from '../../prisma/prisma.service';
import { CreateWorkOrderDto, UpdateWorkOrderDto } from './dto/workorder.dto';
export declare class WorkOrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(query?: Record<string, any>): Promise<({
        quotation: {
            status: string;
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
        quotation_id: number;
        id: number;
        order_code: string;
        customer_id: string;
        created_at: Date;
    })[]>;
    findOne(id: number): Promise<{
        quotation: {
            status: string;
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
        quotation_id: number;
        id: number;
        order_code: string;
        customer_id: string;
        created_at: Date;
    }>;
    findByOrderCode(order_code: string): Promise<{
        quotation_id: number;
        id: number;
        order_code: string;
        customer_id: string;
        created_at: Date;
    } | null>;
    create(data: CreateWorkOrderDto): Promise<{
        quotation: {
            status: string;
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
        quotation_id: number;
        id: number;
        order_code: string;
        customer_id: string;
        created_at: Date;
    }>;
    update(id: number, data: UpdateWorkOrderDto): Promise<{
        quotation: {
            status: string;
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
        quotation_id: number;
        id: number;
        order_code: string;
        customer_id: string;
        created_at: Date;
    }>;
    remove(id: number): Promise<{
        quotation_id: number;
        id: number;
        order_code: string;
        customer_id: string;
        created_at: Date;
    }>;
}
