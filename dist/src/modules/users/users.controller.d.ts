import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        name: string | null;
        tenant_id: number | null;
        role: string;
        role_id: number | null;
        email: string;
        password: string;
        is_super_admin: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        name: string | null;
        tenant_id: number | null;
        role: string;
        role_id: number | null;
        email: string;
        password: string;
        is_super_admin: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string | null;
        tenant_id: number | null;
        role: string;
        role_id: number | null;
        email: string;
        password: string;
        is_super_admin: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    remove(id: number): Promise<{
        id: number;
        name: string | null;
        tenant_id: number | null;
        role: string;
        role_id: number | null;
        email: string;
        password: string;
        is_super_admin: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
