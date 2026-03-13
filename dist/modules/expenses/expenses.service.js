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
exports.ExpensesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const code_generator_1 = require("../../common/utils/code-generator");
let ExpensesService = class ExpensesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateExpenseCode() {
        const latestExpense = await this.prisma.expense.findFirst({
            where: { code: { startsWith: code_generator_1.CODE_PREFIX.expense } },
            orderBy: { id: 'desc' },
            select: { code: true },
        });
        return (0, code_generator_1.getNextCode)(code_generator_1.CODE_PREFIX.expense, latestExpense?.code);
    }
    async findAll(where = {}) {
        return this.prisma.expense.findMany({
            where,
            include: {
                supplier: true,
                type: true,
            },
            orderBy: { exp_date: 'desc' },
        });
    }
    async findOne(id) {
        const expense = await this.prisma.expense.findUnique({
            where: { id },
            include: {
                supplier: true,
                type: true,
            },
        });
        if (!expense)
            throw new common_1.NotFoundException('Expense not found');
        return expense;
    }
    async create(data) {
        const rest = { ...data };
        delete rest.code;
        return (0, code_generator_1.createWithGeneratedCode)({
            generateCode: () => this.generateExpenseCode(),
            createRecord: (code) => this.prisma.expense.create({
                data: { ...rest, code },
                include: {
                    supplier: true,
                    type: true,
                },
            }),
            uniqueField: 'code',
            entityLabel: 'expense',
        });
    }
    async update(id, data) {
        await this.findOne(id);
        const rest = { ...data };
        delete rest.code;
        return this.prisma.expense.update({
            where: { id },
            data: rest,
            include: {
                supplier: true,
                type: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.expense.delete({
            where: { id },
        });
    }
};
exports.ExpensesService = ExpensesService;
exports.ExpensesService = ExpensesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ExpensesService);
//# sourceMappingURL=expenses.service.js.map