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
exports.QuotationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let QuotationsService = class QuotationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(where = {}) {
        return this.prisma.quotation.findMany({
            where,
            include: {
                customer: { select: { name: true } },
                project_type: true,
                items: true,
            },
            orderBy: { quote_date: 'desc' },
        });
    }
    async findOne(id) {
        const quotation = await this.prisma.quotation.findUnique({
            where: { id },
            include: {
                customer: true,
                project_type: true,
                items: true,
            },
        });
        if (!quotation)
            throw new common_1.NotFoundException('Quotation not found');
        return quotation;
    }
    async create(data) {
        const { items, ...quoteData } = data;
        const itemsData = (items || []).map((item) => ({
            description: item.description,
            unit_price: item.unit_price,
            quantity: item.quantity,
            total: item.total,
        }));
        return this.prisma.quotation.create({
            data: {
                ...quoteData,
                items: {
                    create: itemsData,
                },
            },
            include: {
                customer: true,
                project_type: true,
                items: true,
            },
        });
    }
    async update(id, data) {
        await this.findOne(id);
        const { items, ...quoteData } = data;
        if (items) {
            await this.prisma.quotationItem.deleteMany({
                where: { quotation_id: id },
            });
            const itemsData = items.map((item) => ({
                description: item.description,
                unit_price: item.unit_price,
                quantity: item.quantity,
                total: item.total,
            }));
            return this.prisma.quotation.update({
                where: { id },
                data: {
                    ...quoteData,
                    items: {
                        create: itemsData,
                    },
                },
                include: {
                    customer: true,
                    project_type: true,
                    items: true,
                },
            });
        }
        return this.prisma.quotation.update({
            where: { id },
            data: quoteData,
            include: {
                customer: true,
                project_type: true,
                items: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.quotation.delete({
            where: { id },
        });
    }
};
exports.QuotationsService = QuotationsService;
exports.QuotationsService = QuotationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QuotationsService);
//# sourceMappingURL=quotations.service.js.map