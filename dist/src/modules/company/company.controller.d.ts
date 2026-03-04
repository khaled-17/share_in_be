import { CompanyService } from './company.service';
import { UpdateCompanyDto } from './dto/company.dto';
export declare class CompanyController {
    private companyService;
    constructor(companyService: CompanyService);
    getCompany(): Promise<{
        success: boolean;
        data: {
            id: number;
            name: string;
            description: string | null;
            email: string | null;
            phone: string | null;
            address: string | null;
            about: string | null;
            website: string | null;
            updated_at: Date;
        } | null;
    }>;
    update(updateCompanyDto: UpdateCompanyDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: number;
            name: string;
            description: string | null;
            email: string | null;
            phone: string | null;
            address: string | null;
            about: string | null;
            website: string | null;
            updated_at: Date;
        };
    }>;
}
