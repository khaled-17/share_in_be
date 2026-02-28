import * as userRepository from './user.repository.js';
import bcrypt from 'bcryptjs';
export const getAllUsers = async () => {
    return await userRepository.getAllUsers();
};
export const registerUser = async (userData) => {
    const { email, password, name } = userData;
    // TODO: Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    return await userRepository.createUser({
        email,
        password: hashedPassword,
        name,
    });
};
export const loginUser = async (email, password) => {
    // This will be part of Auth module really, but ok for now.
    // The instruction said Auth module separately.
    // So let's keep user service focused on user management if possible.
    // But usually creating user IS registration.
    // For now I'll stick to basic CRUD for user service.
    // I'll leave auth logic to auth service.
    return await userRepository.findUserByEmail(email);
};
