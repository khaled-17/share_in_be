import * as userService from './user.service.js';
export const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const registerUser = async (req, res) => {
    try {
        // Here we'd add input validation (zod)
        const user = await userService.registerUser(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
