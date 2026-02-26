import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT: string | number = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// فحص الاتصال بقاعدة البيانات عند بدء التشغيل
(async () => {
    try {
        await prisma.$connect();
        console.log('✅ تم الاتصال بقاعدة البيانات بنجاح باستخدام Prisma!');
    } catch (error: any) {
        console.error('❌ فشل الاتصال بقاعدة البيانات:', error.message);
        process.exit(1);
    }
})();

// -- Routes (API Endpoints) --

// GET: فحص عمل الخادم
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the Node.js REST API with Prisma', status: 'Running' });
});

// GET: الحصول على جميع المستخدمين
app.get('/api/users', async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// POST: إضافة مستخدم جديد
app.post('/api/users', async (req: Request, res: Response) => {
    const { name, email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email
            }
        });
        res.status(201).json(newUser);
    } catch (error: any) {
        // التحقق من خطأ التكرار (Unique Constraint)
        if (error.code === 'P2002') {
            return res.status(409).json({ error: 'A user with this email already exists' });
        }
        res.status(500).json({ error: error.message });
    }
});

// التعامل مع الأخطاء العامة
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// بدء تشغيل الخادم
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
