import * as supplierRepository from './supplier.repository.js';

export const getAllSuppliers = async (query: any) => {
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 10;
    const search = query.search as string;
    const skip = (page - 1) * limit;

    const { suppliers, total } = await supplierRepository.findAll({
        skip,
        take: limit,
        search,
    });

    return {
        suppliers,
        pagination: {
            page,
            limit,
            total,
        },
    };
};

export const getSupplierById = async (id: string) => {
    const supplier = await supplierRepository.findById(id);
    if (!supplier) {
        throw new Error('Supplier not found');
    }
    return supplier;
};

export const createSupplier = async (data: any) => {
    if (data.supplier_id) {
        const existing = await supplierRepository.findById(data.supplier_id);
        if (existing) {
            throw new Error('Supplier ID already exists');
        }
    }
    return await supplierRepository.create(data);
};

export const updateSupplier = async (id: string, data: any) => {
    await getSupplierById(id);
    return await supplierRepository.update(id, data);
};

export const deleteSupplier = async (id: string) => {
    await getSupplierById(id);
    return await supplierRepository.remove(id);
};
