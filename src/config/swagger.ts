import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Share In API Documentation',
            version: '1.0.0',
            description: 'Complete REST API documentation for Share In Backend',
            contact: {
                name: 'API Support',
                email: 'info@share-in.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
            {
                url: 'https://api.share-in.com',
                description: 'Production server',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: 'Enter JWT token obtained from /api/v1/auth/login',
                },
            },
            schemas: {
                Error: {
                    type: 'object',
                    properties: {
                        success: {
                            type: 'boolean',
                            example: false,
                        },
                        message: {
                            type: 'string',
                            example: 'Error message',
                        },
                    },
                },
                Success: {
                    type: 'object',
                    properties: {
                        success: {
                            type: 'boolean',
                            example: true,
                        },
                        message: {
                            type: 'string',
                            example: 'Operation successful',
                        },
                        data: {
                            type: 'object',
                        },
                    },
                },
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            example: 'user@example.com',
                        },
                        name: {
                            type: 'string',
                            example: 'John Doe',
                        },
                        createdAt: {
                            type: 'string',
                            format: 'date-time',
                            example: '2024-01-01T00:00:00.000Z',
                        },
                    },
                },
                AuthResponse: {
                    type: 'object',
                    properties: {
                        success: {
                            type: 'boolean',
                            example: true,
                        },
                        message: {
                            type: 'string',
                            example: 'Login successful',
                        },
                        data: {
                            type: 'object',
                            properties: {
                                user: {
                                    $ref: '#/components/schemas/User',
                                },
                                token: {
                                    type: 'string',
                                    example:
                                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsImlhdCI6MTYwOTQ1OTIwMCwiZXhwIjoxNjA5NTQ1NjAwfQ.abc123',
                                },
                            },
                        },
                    },
                },
                Pagination: {
                    type: 'object',
                    properties: {
                        page: {
                            type: 'integer',
                            example: 1,
                        },
                        limit: {
                            type: 'integer',
                            example: 10,
                        },
                        total: {
                            type: 'integer',
                            example: 100,
                        },
                        totalPages: {
                            type: 'integer',
                            example: 10,
                        },
                    },
                },
            },
        },
        tags: [
            {
                name: 'Authentication',
                description: 'User authentication endpoints',
            },
            {
                name: 'Users',
                description: 'User management endpoints',
            },
            {
                name: 'Health',
                description: 'System health check endpoints',
            },
        ],
    },
    apis: ['./src/modules/**/*.ts', './src/app.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
