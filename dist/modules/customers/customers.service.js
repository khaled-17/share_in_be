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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CustomersService = class CustomersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(params) {
        const { skip, take, search } = params;
        const where = search
            ? {
                OR: [
                    { name: { contains: search } },
                    { customer_id: { contains: search } },
                    { phone: { contains: search } },
                    { contact_person: { contains: search } },
                ],
            }
            : {};
        const [customers, total] = await Promise.all([
            this.prisma.customer.findMany({
                skip,
                take,
                where,
                orderBy: { created_at: 'desc' },
            }),
            this.prisma.customer.count({ where }),
        ]);
        return { customers, total };
    }
    async findOne(id) {
        const customer = await this.prisma.customer.findUnique({
            where: { customer_id: id },
        });
        if (!customer) {
            throw new common_1.NotFoundException('Customer not found');
        }
        return customer;
    }
    async create(data) {
        const existing = await this.prisma.customer.findUnique({
            where: { customer_id: data.customer_id },
        });
        if (existing) {
            throw new common_1.ConflictException('Customer ID already exists');
        }
        return this.prisma.customer.create({ data });
    }
    async update(id, data) {
        await this.findOne(id);
        return this.prisma.customer.update({
            where: { customer_id: id },
            data,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.customer.delete({
            where: { customer_id: id },
        });
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CustomersService);
//# sourceMappingURL=customers.service.js.map