import * as customerRepository from './customer.repository.js';

export const getAllCustomers = async (query: any) => {
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 10;
    const search = query.search as string;
    const skip = (page - 1) * limit;

    const { customers, total } = await customerRepository.findAll({
        skip,
        take: limit,
        search,
    });

    return {
        customers,
        pagination: {
            page,
            limit,
            total,
        },
    };
};

export const getCustomerById = async (id: string) => {
    const customer = await customerRepository.findById(id);
    if (!customer) {
        throw new Error('Customer not found');
    }
    return customer;
};

export const createCustomer = async (data: any) => {
    // Check if customer_id already exists if it's provided manually
    if (data.customer_id) {
        const existing = await customerRepository.findById(data.customer_id);
        if (existing) {
            throw new Error('Customer ID already exists');
        }
    }
    return await customerRepository.create(data);
};

export const updateCustomer = async (id: string, data: any) => {
    await getCustomerById(id); // Ensure exists
    return await customerRepository.update(id, data);
};

export const deleteCustomer = async (id: string) => {
    await getCustomerById(id); // Ensure exists
    return await customerRepository.remove(id);
};
