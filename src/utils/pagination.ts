import { Request } from 'express';

export const getPaginationParams = (req: Request): { page: number; limit: number; skip: number } => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    return {
        page,
        limit,
        skip,
    };
};

export const buildWhereClause = (filters: Record<string, any>): any => {
    const where: any = {};

    Object.keys(filters).forEach((key) => {
        if (filters[key] !== undefined && filters[key] !== null && filters[key] !== '') {
            // Handle search (contains)
            if (key.includes('search')) {
                const searchField = key.replace('search_', '');
                where[searchField] = {
                    contains: filters[key],
                    mode: 'insensitive',
                };
            } else {
                where[key] = filters[key];
            }
        }
    });

    return where;
};

export const buildOrderBy = (req: Request): any => {
    const sortBy = (req.query.sortBy as string) || 'createdAt';
    const sortOrder = (req.query.sortOrder as string) || 'desc';

    return {
        [sortBy]: sortOrder,
    };
};
