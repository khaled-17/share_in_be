import { PrismaService } from '../../prisma/prisma.service';
import { CreateWorkOrderDto, UpdateWorkOrderDto } from './dto/workorder.dto';
export declare class WorkOrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(query?: Record<string, any>): Promise<({
        customer: {
            name: string;
            customer_id: string;
            created_at: Date;
            contact_person: string;
            company_email: string;
            contact_email: string;
            phone: string;
            secondary_phone: string;
            address: string;
        };
        quotation: {
            id: number;
            receipt_no: string | null;
            customer_id: string;
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
    } & {
        id: number;
        customer_id: string;
        created_at: Date;
        order_code: string;
        quotation_id: number;
    })[]>;
    findOne(id: number): Promise<{
        customer: {
            name: string;
            customer_id: string;
            created_at: Date;
            contact_person: string;
            company_email: string;
            contact_email: string;
            phone: string;
            secondary_phone: string;
            address: string;
        };
        quotation: {
            id: number;
            receipt_no: string | null;
            customer_id: string;
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
    } & {
        id: number;
        customer_id: string;
        created_at: Date;
        order_code: string;
        quotation_id: number;
    }>;
    findByOrderCode(order_code: string): Promise<{
        id: number;
        customer_id: string;
        created_at: Date;
        order_code: string;
        quotation_id: number;
    } | null>;
    create(data: CreateWorkOrderDto): Promise<{
        customer: {
            name: string;
            customer_id: string;
            created_at: Date;
            contact_person: string;
            company_email: string;
            contact_email: string;
            phone: string;
            secondary_phone: string;
            address: string;
        };
        quotation: {
            id: number;
            receipt_no: string | null;
            customer_id: string;
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
    } & {
        id: number;
        customer_id: string;
        created_at: Date;
        order_code: string;
        quotation_id: number;
    }>;
    update(id: number, data: UpdateWorkOrderDto): Promise<{
        customer: {
            name: string;
            customer_id: string;
            created_at: Date;
            contact_person: string;
            company_email: string;
            contact_email: string;
            phone: string;
            secondary_phone: string;
            address: string;
        };
        quotation: {
            id: number;
            receipt_no: string | null;
            customer_id: string;
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
    } & {
        id: number;
        customer_id: string;
        created_at: Date;
        order_code: string;
        quotation_id: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        customer_id: string;
        created_at: Date;
        order_code: string;
        quotation_id: number;
    }>;
}
