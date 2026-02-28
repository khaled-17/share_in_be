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

export const getSupplierById = async (idOrCode: string | number) => {
    let supplier = null;

    const idInt = typeof idOrCode === 'string' ? parseInt(idOrCode) : idOrCode;
    if (!isNaN(idInt as number)) {
        supplier = await supplierRepository.findById(idInt as number);
    }

    if (!supplier) {
        supplier = await supplierRepository.findBySupplierCode(idOrCode.toString());
    }

    if (!supplier) {
        throw new Error('Supplier not found');
    }
    return supplier;
};

export const createSupplier = async (data: any) => {
    if (data.supplier_id) {
        const existing = await supplierRepository.findBySupplierCode(data.supplier_id);
        if (existing) {
            throw new Error('Supplier ID already exists');
        }
    }
    return await supplierRepository.create(data);
};

export const updateSupplier = async (id: string | number, data: any) => {
    await getSupplierById(id);
    return await supplierRepository.update(id, data);
};

export const deleteSupplier = async (id: string | number) => {
    await getSupplierById(id);
    return await supplierRepository.remove(id);
};
