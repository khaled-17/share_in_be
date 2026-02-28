import bcrypt from 'bcryptjs';
import * as userRepository from '../users/user.repository.js';
import { generateToken } from '../../utils/jwt.js';

export const register = async (userData: any): Promise<{ user: any; token: string }> => {
    const { email, password, name } = userData;

    // Check if user already exists
    const existingUser = await userRepository.findUserByEmail(email);
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await userRepository.createUser({
        email,
        password: hashedPassword,
        name,
    });

    // Generate token
    const token = generateToken({ userId: user.id, email: user.email });

    return { user, token };
};

export const login = async (
    email: string,
    password: string,
): Promise<{ user: any; token: string }> => {
    // Find user
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
        throw new Error('Invalid credentials');
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }

    // Generate token
    const token = generateToken({ userId: user.id, email: user.email });

    return { user, token };
};
