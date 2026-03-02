import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        name: string | null;
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        name: string | null;
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        name: string | null;
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    remove(id: number): Promise<{
        name: string | null;
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
