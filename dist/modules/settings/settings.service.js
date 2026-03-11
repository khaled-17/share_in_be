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
let SettingsService = class SettingsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllRevenueTypes() {
        return this.prisma.revenueType.findMany({
            orderBy: { revtype_name: 'asc' },
        });
    }
    async createRevenueType(data) {
        const existing = await this.prisma.revenueType.findUnique({
            where: { revtype_id: data.revtype_id },
        });
        if (existing)
            throw new common_1.ConflictException('Revenue Type ID already exists');
        return this.prisma.revenueType.create({ data });
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
        const existing = await this.prisma.expenseType.findUnique({
            where: { exptype_id: data.exptype_id },
        });
        if (existing)
            throw new common_1.ConflictException('Expense Type ID already exists');
        return this.prisma.expenseType.create({ data });
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
        const { type_id, type_name } = data;
        const existing = await this.prisma.projectType.findUnique({
            where: { type_id },
        });
        if (existing)
            throw new common_1.ConflictException('Project Type already exists');
        return this.prisma.projectType.create({
            data: {
                type_id,
                type_name,
            },
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
        const existing = await this.prisma.country.findUnique({
            where: { country_code: data.country_code },
        });
        if (existing)
            throw new common_1.ConflictException('Country code already exists');
        return this.prisma.country.create({ data });
    }
    async updateCountry(id, data) {
        const existing = await this.prisma.country.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('Country not found');
        return this.prisma.country.update({ where: { id }, data });
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