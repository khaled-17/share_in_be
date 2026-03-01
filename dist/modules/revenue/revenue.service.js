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
exports.RevenueService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let RevenueService = class RevenueService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(filters = {}) {
        const { start_date, end_date, quotation_id } = filters;
        const where = {};
        if (start_date || end_date) {
            where.rev_date = {};
            if (start_date)
                where.rev_date.gte = start_date;
            if (end_date)
                where.rev_date.lte = end_date;
        }
        if (quotation_id)
            where.quote_id = quotation_id;
        return this.prisma.revenue.findMany({
            where,
            include: {
                customer: true,
                type: true,
            },
            orderBy: { rev_date: 'desc' },
        });
    }
    async findOne(id) {
        const revenue = await this.prisma.revenue.findUnique({
            where: { id },
            include: {
                customer: true,
                type: true,
            },
        });
        if (!revenue)
            throw new common_1.NotFoundException('Revenue not found');
        return revenue;
    }
    async create(data) {
        const { amount, quote_id, ...revenueData } = data;
        return this.prisma.revenue.create({
            data: {
                ...revenueData,
                amount: parseFloat(amount),
                quote_id: quote_id ? parseInt(quote_id) : null,
            },
            include: {
                customer: true,
                type: true,
            },
        });
    }
    async update(id, data) {
        await this.findOne(id);
        const { amount, quote_id, ...revenueData } = data;
        return this.prisma.revenue.update({
            where: { id },
            data: {
                ...revenueData,
                amount: amount !== undefined ? parseFloat(amount) : undefined,
                quote_id: quote_id !== undefined
                    ? quote_id
                        ? parseInt(quote_id)
                        : null
                    : undefined,
            },
            include: {
                customer: true,
                type: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.revenue.delete({
            where: { id },
        });
    }
};
exports.RevenueService = RevenueService;
exports.RevenueService = RevenueService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RevenueService);
//# sourceMappingURL=revenue.service.js.map