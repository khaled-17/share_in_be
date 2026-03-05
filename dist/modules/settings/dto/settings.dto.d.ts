export declare class CreateProjectTypeDto {
    type: string;
}
export declare class UpdateProjectTypeDto {
    type?: string;
}
export declare class CreateCountryDto {
    country_code: string;
    country_name: string;
}
export declare class UpdateCountryDto {
    country_code?: string;
    country_name?: string;
}
export declare class CreateExpenseTypeDto {
    exptype_id: string;
    exptype_name: string;
    category?: string;
}
export declare class UpdateExpenseTypeDto {
    exptype_name?: string;
    category?: string;
}
export declare class CreateRevenueTypeDto {
    revtype_id: string;
    revtype_name: string;
    paymethod?: string;
}
export declare class UpdateRevenueTypeDto {
    revtype_name?: string;
    paymethod?: string;
}
