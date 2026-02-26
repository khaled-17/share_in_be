# Share In Backend API

🚀 Backend REST API built with Node.js, Express, Prisma, and MySQL

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Prisma ORM** - Database toolkit
- **MySQL** - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Winston** - Logging
- **Swagger** - API Documentation
- **ESLint & Prettier** - Code quality
- **Husky** - Git hooks

## 📦 Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Generate Prisma Client
npm run generate

# Push database schema
npm run db:push

# Seed the database
npm run seed
```

## 🚀 Running the Application

```bash
# Development mode with hot reload
npm run dev

# Production mode
npm start

# Open Prisma Studio
npm run studio
```

## 📚 API Documentation

Once the server is running, access the interactive Swagger documentation at:

```
http://localhost:3000/api-docs
```

This provides:
- Complete API reference
- Request/Response examples
- Try-it-out functionality
- Authentication testing

## 🔐 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user

### Users (Protected)
- `GET /api/v1/users` - Get all users (requires authentication)

### Health
- `GET /` - API root information
- `GET /health` - Health check endpoint

## 📝 Environment Variables

```env
# Database
DATABASE_URL="mysql://user:password@localhost:3306/dbname"

# Server
PORT=3000
NODE_ENV=development

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
```

## 🏗️ Project Structure

```
src/
├── config/           # Configuration files
│   ├── prisma.js    # Prisma client
│   └── swagger.js   # Swagger configuration
├── modules/          # Feature modules
│   ├── auth/        # Authentication module
│   │   ├── auth.controller.js
│   │   ├── auth.service.js
│   │   └── auth.routes.js
│   └── users/       # Users module
│       ├── user.controller.js
│       ├── user.service.js
│       ├── user.repository.js
│       └── user.routes.js
├── middlewares/      # Express middlewares
│   ├── auth.middleware.js
│   └── error.middleware.js
├── utils/           # Utility functions
│   ├── jwt.js      # JWT utilities
│   ├── logger.js   # Winston logger
│   ├── response.js # Response helpers
│   └── pagination.js # Pagination utilities
├── app.js           # Express app setup
└── server.js        # Server entry point
```

## 🧪 Testing API with Examples

### 1. Register User
```bash
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "name": "Test User"
  }'
```

### 2. Login
```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### 3. Get Users (Protected)
```bash
curl -X GET http://localhost:3000/api/v1/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 📊 Best Practices Implemented

✅ Modular architecture  
✅ Separation of concerns (Controller/Service/Repository)  
✅ Centralized error handling  
✅ Structured logging with Winston  
✅ JWT authentication  
✅ API versioning (`/api/v1/`)  
✅ Environment configuration  
✅ Comprehensive Swagger documentation  
✅ Code linting & formatting (ESLint + Prettier)  
✅ Git hooks with Husky  
✅ Pagination & filtering utilities  
✅ Standardized response format  

## 🔒 Security Features

- Password hashing with bcrypt (10 rounds)
- JWT token-based authentication
- CORS enabled
- Environment variable validation
- Error message sanitization
- Protected routes with middleware

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on:
- Code standards
- Swagger documentation guidelines
- Git workflow
- Pull request process

## 📄 License

ISC

---

## 🚀 Quick Start Guide

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Configure environment**: Edit `.env` file
4. **Setup database**: `npm run db:push`
5. **Seed data**: `npm run seed`
6. **Start server**: `npm run dev`
7. **View docs**: Open http://localhost:3000/api-docs

---

Made with ❤️ by Share In Team
