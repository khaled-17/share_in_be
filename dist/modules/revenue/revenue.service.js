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
exports.RevenueService = exports.RevenueFilters = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const code_generator_1 = require("../../common/utils/code-generator");
class RevenueFilters {
    start_date;
    end_date;
    quotation_id;
}
exports.RevenueFilters = RevenueFilters;
let RevenueService = class RevenueService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateRevenueCode() {
        const latestRevenue = await this.prisma.revenue.findFirst({
            where: { code: { startsWith: code_generator_1.CODE_PREFIX.revenue } },
            orderBy: { id: 'desc' },
            select: { code: true },
        });
        return (0, code_generator_1.getNextCode)(code_generator_1.CODE_PREFIX.revenue, latestRevenue?.code);
    }
    async findAll(filters = {}) {
        const { start_date, end_date, quotation_id } = filters;
        const where = {};
        if (start_date || end_date) {
            where.rev_date = {
                gte: start_date,
                lte: end_date,
            };
        }
        if (quotation_id) {
            where.quote_id = quotation_id;
        }
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
        const rest = { ...data };
        delete rest.code;
        return (0, code_generator_1.createWithGeneratedCode)({
            generateCode: () => this.generateRevenueCode(),
            createRecord: (code) => this.prisma.revenue.create({
                data: { ...rest, code },
                include: {
                    customer: true,
                    type: true,
                },
            }),
            uniqueField: 'code',
            entityLabel: 'revenue',
        });
    }
    async update(id, data) {
        await this.findOne(id);
        const rest = { ...data };
        delete rest.code;
        return this.prisma.revenue.update({
            where: { id },
            data: rest,
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