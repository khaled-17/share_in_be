import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        role: string;
        name: string | null;
        id: number;
        email: string;
        password: string;
        tenant_id: number | null;
        role_id: number | null;
        is_super_admin: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        role: string;
        name: string | null;
        id: number;
        email: string;
        password: string;
        tenant_id: number | null;
        role_id: number | null;
        is_super_admin: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        role: string;
        name: string | null;
        id: number;
        email: string;
        password: string;
        tenant_id: number | null;
        role_id: number | null;
        is_super_admin: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    remove(id: number): Promise<{
        role: string;
        name: string | null;
        id: number;
        email: string;
        password: string;
        tenant_id: number | null;
        role_id: number | null;
        is_super_admin: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
