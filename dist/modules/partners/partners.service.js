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
exports.PartnersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PartnersService = class PartnersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.partner.findMany({
            orderBy: { id: 'desc' },
        });
    }
    async findOne(id) {
        const partner = await this.prisma.partner.findUnique({
            where: { id },
            include: {
                receipt_vouchers: true,
                payment_vouchers: true,
            },
        });
        if (!partner) {
            throw new common_1.NotFoundException('Partner not found');
        }
        return partner;
    }
    async findByPartnerCode(partner_code) {
        return this.prisma.partner.findUnique({
            where: { partner_code },
        });
    }
    async getSummary(id) {
        const data = await this.prisma.partner.findUnique({
            where: { id },
            include: {
                receipt_vouchers: {
                    where: { source_type: 'partner_capital' },
                    select: { amount: true },
                },
                payment_vouchers: {
                    where: { beneficiary_type: 'partner_withdrawal' },
                    select: { amount: true },
                },
            },
        });
        if (!data) {
            throw new common_1.NotFoundException('Partner not found');
        }
        const totalIncreases = data.receipt_vouchers.reduce((sum, v) => sum + v.amount, 0);
        const totalWithdrawals = data.payment_vouchers.reduce((sum, v) => sum + v.amount, 0);
        return {
            partner_code: data.partner_code,
            name: data.name,
            initial_capital: data.initial_capital,
            current_capital: data.current_capital,
            total_capital_increase: totalIncreases,
            total_withdrawals: totalWithdrawals,
            net_capital: data.initial_capital + totalIncreases - totalWithdrawals,
        };
    }
    async create(data) {
        if (data.partner_code) {
            const existing = await this.findByPartnerCode(data.partner_code);
            if (existing) {
                throw new common_1.ConflictException('Partner Code already exists');
            }
        }
        if (data.initial_capital !== undefined && data.current_capital === undefined) {
            data.current_capital = data.initial_capital;
        }
        return this.prisma.partner.create({ data });
    }
    async update(id, data) {
        await this.findOne(id);
        if (data.partner_code && typeof data.partner_code === 'string') {
            const existing = await this.findByPartnerCode(data.partner_code);
            if (existing && existing.id !== id) {
                throw new common_1.ConflictException('Partner Code already exists');
            }
        }
        return this.prisma.partner.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        const partner = await this.findOne(id);
        if ((partner.receipt_vouchers && partner.receipt_vouchers.length > 0) ||
            (partner.payment_vouchers && partner.payment_vouchers.length > 0)) {
            throw new common_1.BadRequestException('لا يمكن حذف شريك له سندات مسجلة');
        }
        return this.prisma.partner.delete({
            where: { id },
        });
    }
};
exports.PartnersService = PartnersService;
exports.PartnersService = PartnersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PartnersService);
//# sourceMappingURL=partners.service.js.map