import jwt from 'jsonwebtoken';

const JWT_SECRET: string = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN: string = process.env.JWT_EXPIRES_IN || '1d';

export const generateToken = (payload: object | string): string => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN as any });
};

export const verifyToken = (token: string): any => {
    return jwt.verify(token, JWT_SECRET);
};
