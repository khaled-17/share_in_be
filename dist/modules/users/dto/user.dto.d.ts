export declare enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
    PARTNER = "PARTNER"
}
export declare class CreateUserDto {
    name: string;
    email: string;
    role?: UserRole;
}
export declare class UpdateUserDto {
    name?: string;
    role?: UserRole;
}
