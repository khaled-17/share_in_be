export const getPaginationParams = (req) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    return {
        page,
        limit,
        skip,
    };
};
export const buildWhereClause = (filters) => {
    const where = {};
    Object.keys(filters).forEach((key) => {
        if (filters[key] !== undefined && filters[key] !== null && filters[key] !== '') {
            // Handle search (contains)
            if (key.includes('search')) {
                const searchField = key.replace('search_', '');
                where[searchField] = {
                    contains: filters[key],
                    mode: 'insensitive',
                };
            }
            else {
                where[key] = filters[key];
            }
        }
    });
    return where;
};
export const buildOrderBy = (req) => {
    const sortBy = req.query.sortBy || 'createdAt';
    const sortOrder = req.query.sortOrder || 'desc';
    return {
        [sortBy]: sortOrder,
    };
};
