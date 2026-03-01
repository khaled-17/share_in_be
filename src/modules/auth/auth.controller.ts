import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() userData: any) {
        const result = await this.authService.register(userData);
        return {
            success: true,
            message: 'User registered successfully',
            data: result,
        };
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() credentials: any) {
        const result = await this.authService.login(
            credentials.email,
            credentials.password,
        );
        return {
            success: true,
            message: 'Login successful',
            data: result,
        };
    }

    @Post('refresh-token')
    @HttpCode(HttpStatus.OK)
    async refreshToken(@Body('refreshToken') token: string) {
        const result = await this.authService.refreshToken(token);
        return {
            success: true,
            message: 'Token refreshed successfully',
            data: result,
        };
    }
}
