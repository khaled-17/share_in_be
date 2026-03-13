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
exports.WorkOrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const code_generator_1 = require("../../common/utils/code-generator");
let WorkOrdersService = class WorkOrdersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateOrderCode() {
        const latestWorkOrder = await this.prisma.workOrder.findFirst({
            where: { order_code: { startsWith: code_generator_1.CODE_PREFIX.workOrder } },
            orderBy: { id: 'desc' },
            select: { order_code: true },
        });
        return (0, code_generator_1.getNextCode)(code_generator_1.CODE_PREFIX.workOrder, latestWorkOrder?.order_code);
    }
    async findAll(query = {}) {
        return this.prisma.workOrder.findMany({
            where: query,
            include: {
                customer: true,
                quotation: true,
            },
            orderBy: { created_at: 'desc' },
        });
    }
    async findOne(id) {
        const workOrder = await this.prisma.workOrder.findUnique({
            where: { id },
            include: {
                customer: true,
                quotation: true,
            },
        });
        if (!workOrder)
            throw new common_1.NotFoundException('Work order not found');
        return workOrder;
    }
    async findByOrderCode(order_code) {
        return this.prisma.workOrder.findUnique({
            where: { order_code },
        });
    }
    async create(data) {
        const payload = data;
        const rest = {
            ...payload,
            order_code: undefined,
        };
        return (0, code_generator_1.createWithGeneratedCode)({
            generateCode: () => this.generateOrderCode(),
            createRecord: (order_code) => this.prisma.workOrder.create({
                data: { ...rest, order_code },
                include: {
                    customer: true,
                    quotation: true,
                },
            }),
            uniqueField: 'order_code',
            entityLabel: 'work order',
        });
    }
    async update(id, data) {
        await this.findOne(id);
        const rest = { ...data };
        delete rest.order_code;
        const payload = rest;
        return this.prisma.workOrder.update({
            where: { id },
            data: payload,
            include: {
                customer: true,
                quotation: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.workOrder.delete({
            where: { id },
        });
    }
};
exports.WorkOrdersService = WorkOrdersService;
exports.WorkOrdersService = WorkOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WorkOrdersService);
//# sourceMappingURL=workorders.service.js.map