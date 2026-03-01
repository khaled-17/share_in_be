export declare class CreateWorkOrderDto {
    quotation_id: number;
    title: string;
    description?: string;
    start_date: string;
    end_date?: string;
    employee_id?: number;
}
export declare class UpdateWorkOrderDto {
    status?: string;
    description?: string;
    employee_id?: number;
}
