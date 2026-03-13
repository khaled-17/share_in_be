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
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const code_generator_1 = require("../../common/utils/code-generator");
let SettingsService = class SettingsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateRevenueTypeCode() {
        const latest = await this.prisma.revenueType.findFirst({
            where: { revtype_id: { startsWith: code_generator_1.CODE_PREFIX.revenueType } },
            orderBy: { id: 'desc' },
            select: { revtype_id: true },
        });
        return (0, code_generator_1.getNextCode)(code_generator_1.CODE_PREFIX.revenueType, latest?.revtype_id);
    }
    async generateExpenseTypeCode() {
        const latest = await this.prisma.expenseType.findFirst({
            where: { exptype_id: { startsWith: code_generator_1.CODE_PREFIX.expenseType } },
            orderBy: { id: 'desc' },
            select: { exptype_id: true },
        });
        return (0, code_generator_1.getNextCode)(code_generator_1.CODE_PREFIX.expenseType, latest?.exptype_id);
    }
    async generateProjectTypeCode() {
        const latest = await this.prisma.projectType.findFirst({
            where: { type_id: { startsWith: code_generator_1.CODE_PREFIX.projectType } },
            orderBy: { id: 'desc' },
            select: { type_id: true },
        });
        return (0, code_generator_1.getNextCode)(code_generator_1.CODE_PREFIX.projectType, latest?.type_id);
    }
    async generateCountryCode() {
        const latest = await this.prisma.country.findFirst({
            where: { country_code: { startsWith: code_generator_1.CODE_PREFIX.country } },
            orderBy: { id: 'desc' },
            select: { country_code: true },
        });
        return (0, code_generator_1.getNextCode)(code_generator_1.CODE_PREFIX.country, latest?.country_code);
    }
    async getAllRevenueTypes() {
        return this.prisma.revenueType.findMany({
            orderBy: { revtype_name: 'asc' },
        });
    }
    async createRevenueType(data) {
        const rest = { ...data };
        delete rest.revtype_id;
        return (0, code_generator_1.createWithGeneratedCode)({
            generateCode: () => this.generateRevenueTypeCode(),
            createRecord: (revtype_id) => this.prisma.revenueType.create({
                data: { ...rest, revtype_id },
            }),
            uniqueField: 'revtype_id',
            entityLabel: 'revenue type',
        });
    }
    async updateRevenueType(id, data) {
        const existing = await this.prisma.revenueType.findUnique({
            where: { id },
        });
        if (!existing)
            throw new common_1.NotFoundException('Revenue Type not found');
        return this.prisma.revenueType.update({
            where: { id },
            data,
        });
    }
    async deleteRevenueType(id) {
        const existing = await this.prisma.revenueType.findUnique({
            where: { id },
        });
        if (!existing)
            throw new common_1.NotFoundException('Revenue Type not found');
        return this.prisma.revenueType.delete({
            where: { id },
        });
    }
    async getAllExpenseTypes() {
        return this.prisma.expenseType.findMany({
            orderBy: { exptype_name: 'asc' },
        });
    }
    async createExpenseType(data) {
        const rest = { ...data };
        delete rest.exptype_id;
        return (0, code_generator_1.createWithGeneratedCode)({
            generateCode: () => this.generateExpenseTypeCode(),
            createRecord: (exptype_id) => this.prisma.expenseType.create({
                data: { ...rest, exptype_id },
            }),
            uniqueField: 'exptype_id',
            entityLabel: 'expense type',
        });
    }
    async updateExpenseType(id, data) {
        const existing = await this.prisma.expenseType.findUnique({
            where: { id },
        });
        if (!existing)
            throw new common_1.NotFoundException('Expense Type not found');
        return this.prisma.expenseType.update({
            where: { id },
            data,
        });
    }
    async deleteExpenseType(id) {
        const existing = await this.prisma.expenseType.findUnique({
            where: { id },
        });
        if (!existing)
            throw new common_1.NotFoundException('Expense Type not found');
        return this.prisma.expenseType.delete({
            where: { id },
        });
    }
    async findAllProjectTypes() {
        return this.prisma.projectType.findMany({
            orderBy: { type_name: 'asc' },
        });
    }
    async createProjectType(data) {
        const rest = { ...data };
        delete rest.type_id;
        return (0, code_generator_1.createWithGeneratedCode)({
            generateCode: () => this.generateProjectTypeCode(),
            createRecord: (type_id) => this.prisma.projectType.create({
                data: {
                    ...rest,
                    type_id,
                },
            }),
            uniqueField: 'type_id',
            entityLabel: 'project type',
        });
    }
    async updateProjectType(id, data) {
        const existing = await this.prisma.projectType.findUnique({
            where: { id },
        });
        if (!existing)
            throw new common_1.NotFoundException('Project Type not found');
        const { type_name } = data;
        return this.prisma.projectType.update({
            where: { id },
            data: {
                type_name,
            },
        });
    }
    async removeProjectType(id) {
        const existing = await this.prisma.projectType.findUnique({
            where: { id },
        });
        if (!existing)
            throw new common_1.NotFoundException('Project Type not found');
        return this.prisma.projectType.delete({
            where: { id },
        });
    }
    async getAllCountries() {
        return this.prisma.country.findMany({
            orderBy: { country_name: 'asc' },
        });
    }
    async createCountry(data) {
        const rest = { ...data };
        delete rest.country_code;
        return (0, code_generator_1.createWithGeneratedCode)({
            generateCode: () => this.generateCountryCode(),
            createRecord: (country_code) => this.prisma.country.create({
                data: { ...rest, country_code },
            }),
            uniqueField: 'country_code',
            entityLabel: 'country',
        });
    }
    async updateCountry(id, data) {
        const existing = await this.prisma.country.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('Country not found');
        const rest = { ...data };
        delete rest.country_code;
        return this.prisma.country.update({ where: { id }, data: rest });
    }
    async deleteCountry(id) {
        const existing = await this.prisma.country.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('Country not found');
        return this.prisma.country.delete({ where: { id } });
    }
};
exports.SettingsService = SettingsService;
exports.SettingsService = SettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SettingsService);
//# sourceMappingURL=settings.service.js.map