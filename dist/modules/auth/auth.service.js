import bcrypt from 'bcryptjs';
import * as userRepository from '../users/user.repository.js';
import { generateToken, generateRefreshToken, verifyRefreshToken } from '../../utils/jwt.js';
export const register = async (userData) => {
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
    // Generate tokens
    const accessToken = generateToken({ userId: user.id, email: user.email });
    const refreshToken = generateRefreshToken({ userId: user.id, email: user.email });
    return { user, accessToken, refreshToken };
};
export const login = async (email, password) => {
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
    // Generate tokens
    const accessToken = generateToken({ userId: user.id, email: user.email });
    const refreshToken = generateRefreshToken({ userId: user.id, email: user.email });
    return { user, accessToken, refreshToken };
};
export const refreshToken = async (token) => {
    try {
        const decoded = verifyRefreshToken(token);
        const user = await userRepository.findById(decoded.userId);
        if (!user) {
            throw new Error('User not found');
        }
        const accessToken = generateToken({ userId: user.id, email: user.email });
        const newRefreshToken = generateRefreshToken({ userId: user.id, email: user.email });
        return { accessToken, refreshToken: newRefreshToken };
    }
    catch (error) {
        throw new Error('Invalid refresh token');
    }
};
