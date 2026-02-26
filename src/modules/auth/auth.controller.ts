import { Request, Response, NextFunction } from 'express';
import * as authService from './auth.service.js';

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password, name } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required',
            });
        }

        const result = await authService.register({ email, password, name });

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: {
                user: {
                    id: result.user.id,
                    email: result.user.email,
                    name: result.user.name,
                },
                token: result.token,
            },
        });
    } catch (error) {
        next(error);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required',
            });
        }

        const result = await authService.login(email, password);

        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                user: {
                    id: result.user.id,
                    email: result.user.email,
                    name: result.user.name,
                },
                token: result.token,
            },
        });
    } catch (error) {
        next(error);
    }
};
