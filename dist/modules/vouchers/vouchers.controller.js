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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentVouchersController = exports.ReceiptVouchersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const vouchers_service_1 = require("./vouchers.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const voucher_dto_1 = require("./dto/voucher.dto");
let ReceiptVouchersController = class ReceiptVouchersController {
    vouchersService;
    constructor(vouchersService) {
        this.vouchersService = vouchersService;
    }
    async findAll(query) {
        const result = await this.vouchersService.findAllReceipt(query);
        return {
            success: true,
            message: 'Receipt vouchers retrieved successfully',
            data: result,
        };
    }
    async getStats(query) {
        const result = await this.vouchersService.getStats('receipt', query);
        return {
            success: true,
            data: result,
        };
    }
    async findOne(id) {
        const result = await this.vouchersService.findOneReceipt(id);
        return {
            success: true,
            message: 'Receipt voucher retrieved successfully',
            data: result,
        };
    }
    async create(data) {
        const result = await this.vouchersService.createReceipt(data);
        return {
            success: true,
            message: 'Receipt voucher created successfully',
            data: result,
        };
    }
    async update(id, data) {
        const result = await this.vouchersService.updateReceipt(id, data);
        return {
            success: true,
            message: 'Receipt voucher updated successfully',
            data: result,
        };
    }
    async remove(id) {
        await this.vouchersService.removeReceipt(id);
        return {
            success: true,
            message: 'Receipt voucher deleted successfully',
        };
    }
};
exports.ReceiptVouchersController = ReceiptVouchersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all receipt vouchers' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of receipt vouchers' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vouchers_service_1.ReceiptFilters]),
    __metadata("design:returntype", Promise)
], ReceiptVouchersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('stats/summary'),
    (0, swagger_1.ApiOperation)({ summary: 'Get receipt voucher statistics' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Receipt statistics' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vouchers_service_1.ReceiptFilters]),
    __metadata("design:returntype", Promise)
], ReceiptVouchersController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a receipt voucher by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Voucher ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReceiptVouchersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new receipt voucher' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Receipt voucher created' }),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [voucher_dto_1.CreateReceiptVoucherDto]),
    __metadata("design:returntype", Promise)
], ReceiptVouchersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a receipt voucher' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Voucher ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ReceiptVouchersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a receipt voucher' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Voucher ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReceiptVouchersController.prototype, "remove", null);
exports.ReceiptVouchersController = ReceiptVouchersController = __decorate([
    (0, swagger_1.ApiTags)('ReceiptVouchers'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('receipt-vouchers'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [vouchers_service_1.VouchersService])
], ReceiptVouchersController);
let PaymentVouchersController = class PaymentVouchersController {
    vouchersService;
    constructor(vouchersService) {
        this.vouchersService = vouchersService;
    }
    async findAll(query) {
        const result = await this.vouchersService.findAllPayment(query);
        return {
            success: true,
            message: 'Payment vouchers retrieved successfully',
            data: result,
        };
    }
    async getStats(query) {
        const result = await this.vouchersService.getStats('payment', query);
        return {
            success: true,
            data: result,
        };
    }
    async findOne(id) {
        const result = await this.vouchersService.findOnePayment(id);
        return {
            success: true,
            message: 'Payment voucher retrieved successfully',
            data: result,
        };
    }
    async create(data) {
        const result = await this.vouchersService.createPayment(data);
        return {
            success: true,
            message: 'Payment voucher created successfully',
            data: result,
        };
    }
    async update(id, data) {
        const result = await this.vouchersService.updatePayment(id, data);
        return {
            success: true,
            message: 'Payment voucher updated successfully',
            data: result,
        };
    }
    async remove(id) {
        await this.vouchersService.removePayment(id);
        return {
            success: true,
            message: 'Payment voucher deleted successfully',
        };
    }
};
exports.PaymentVouchersController = PaymentVouchersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all payment vouchers' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of payment vouchers' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vouchers_service_1.PaymentFilters]),
    __metadata("design:returntype", Promise)
], PaymentVouchersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('stats/summary'),
    (0, swagger_1.ApiOperation)({ summary: 'Get payment voucher statistics' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Payment statistics' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vouchers_service_1.PaymentFilters]),
    __metadata("design:returntype", Promise)
], PaymentVouchersController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a payment voucher by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Voucher ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaymentVouchersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new payment voucher' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Payment voucher created' }),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [voucher_dto_1.CreatePaymentVoucherDto]),
    __metadata("design:returntype", Promise)
], PaymentVouchersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a payment voucher' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Voucher ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PaymentVouchersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a payment voucher' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Voucher ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaymentVouchersController.prototype, "remove", null);
exports.PaymentVouchersController = PaymentVouchersController = __decorate([
    (0, swagger_1.ApiTags)('PaymentVouchers'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('payment-vouchers'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [vouchers_service_1.VouchersService])
], PaymentVouchersController);
//# sourceMappingURL=vouchers.controller.js.map