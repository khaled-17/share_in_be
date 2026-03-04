import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding default Tenant, Roles, and Permissions...');

    // 1. Create Default Tenant
    const tenant = await prisma.tenant.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            name: 'Default Company',
        },
    });

    console.log('Tenant:', tenant.name);

    // 2. Define Standard Permissions
    const permissionsData = [
        // Users
        { action: 'READ_USER', module: 'Users', description: 'View all users' },
        { action: 'CREATE_USER', module: 'Users', description: 'Create new users' },
        { action: 'EDIT_USER', module: 'Users', description: 'Edit existing users' },
        { action: 'DELETE_USER', module: 'Users', description: 'Delete users' },

        // Customers
        { action: 'READ_CUSTOMER', module: 'Customers', description: 'View all customers' },
        { action: 'CREATE_CUSTOMER', module: 'Customers', description: 'Create new customers' },
        { action: 'EDIT_CUSTOMER', module: 'Customers', description: 'Edit existing customers' },
        { action: 'DELETE_CUSTOMER', module: 'Customers', description: 'Delete customers' },

        // Suppliers
        { action: 'READ_SUPPLIER', module: 'Suppliers', description: 'View all suppliers' },
        { action: 'CREATE_SUPPLIER', module: 'Suppliers', description: 'Create new suppliers' },
        { action: 'EDIT_SUPPLIER', module: 'Suppliers', description: 'Edit existing suppliers' },
        { action: 'DELETE_SUPPLIER', module: 'Suppliers', description: 'Delete suppliers' },

        // Work Orders
        { action: 'READ_WORKORDER', module: 'WorkOrders', description: 'View all work orders' },
        { action: 'CREATE_WORKORDER', module: 'WorkOrders', description: 'Create new work orders' },
        { action: 'EDIT_WORKORDER', module: 'WorkOrders', description: 'Edit existing work orders' },
        { action: 'DELETE_WORKORDER', module: 'WorkOrders', description: 'Delete work orders' },
    ];

    const createdPermissions: import('@prisma/client').Permission[] = [];

    for (const perm of permissionsData) {
        const permission = await prisma.permission.upsert({
            where: { action: perm.action },
            update: {},
            create: perm,
        });
        createdPermissions.push(permission);
    }

    console.log(`Created/Ensured ${createdPermissions.length} permissions.`);

    // 3. Create Super Admin Role for the Default Tenant
    const adminRole = await prisma.role.upsert({
        where: {
            name_tenant_id: {
                name: 'Super Admin',
                tenant_id: tenant.id,
            },
        },
        update: {},
        create: {
            name: 'Super Admin',
            description: 'Has full access to all modules',
            tenant_id: tenant.id,
        },
    });

    console.log('Role:', adminRole.name);

    // 4. Attach all permissions to the Super Admin Role
    for (const permission of createdPermissions) {
        await prisma.rolePermission.upsert({
            where: {
                role_id_permission_id: {
                    role_id: adminRole.id,
                    permission_id: permission.id,
                },
            },
            update: {},
            create: {
                role_id: adminRole.id,
                permission_id: permission.id,
            },
        });
    }

    console.log('Attached all permissions to Super Admin role.');
    console.log('Seed completed successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
