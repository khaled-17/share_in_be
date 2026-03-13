"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppliersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const code_generator_1 = require("../../common/utils/code-generator");
let SuppliersService = class SuppliersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateSupplierId() {
        const latestSupplier = await this.prisma.supplier.findFirst({
            where: { supplier_id: { startsWith: code_generator_1.CODE_PREFIX.supplier } },
            orderBy: { created_at: 'desc' },
            select: { supplier_id: true },
        });
        return (0, code_generator_1.getNextCode)(code_generator_1.CODE_PREFIX.supplier, latestSupplier?.supplier_id);
    }
    async findAll(params) {
        const { skip, take, search } = params;
        const where = search
            ? {
                OR: [
                    { name: { contains: search } },
                    { supplier_id: { contains: search } },
                    { phone: { contains: search } },
                    { speciality: { contains: search } },
                    { contact_person: { contains: search } },
                ],
            }
            : {};
        const [suppliers, total] = await Promise.all([
            this.prisma.supplier.findMany({
                skip,
                take,
                where,
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.supplier.count({ where }),
        ]);
        return { suppliers, total };
    }
    async findOne(idOrCode) {
        let supplier = null;
        if (typeof idOrCode === 'number' || !isNaN(Number(idOrCode))) {
            supplier = await this.prisma.supplier.findUnique({
                where: { id: Number(idOrCode) },
            });
        }
        if (!supplier) {
            supplier = await this.prisma.supplier.findUnique({
                where: { supplier_id: String(idOrCode) },
            });
        }
        if (!supplier) {
            throw new common_1.NotFoundException('Supplier not found');
        }
        return supplier;
    }
    async create(data) {
        const rest = { ...data };
        delete rest.supplier_id;
        return (0, code_generator_1.createWithGeneratedCode)({
            generateCode: () => this.generateSupplierId(),
            createRecord: (supplier_id) => this.prisma.supplier.create({
                data: { ...rest, supplier_id },
            }),
            uniqueField: 'supplier_id',
            entityLabel: 'supplier',
        });
    }
    async update(idOrCode, data) {
        const supplier = await this.findOne(idOrCode);
        return this.prisma.supplier.update({
            where: { id: supplier.id },
            data,
        });
    }
    async remove(idOrCode) {
        const supplier = await this.findOne(idOrCode);
        return this.prisma.supplier.delete({
            where: { id: supplier.id },
        });
    }
};
exports.SuppliersService = SuppliersService;
exports.SuppliersService = SuppliersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SuppliersService);
//# sourceMappingURL=suppliers.service.js.map