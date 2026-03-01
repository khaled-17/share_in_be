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
exports.QuotationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const quotations_service_1 = require("./quotations.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const quotation_dto_1 = require("./dto/quotation.dto");
let QuotationsController = class QuotationsController {
    quotationsService;
    constructor(quotationsService) {
        this.quotationsService = quotationsService;
    }
    async findAll(query) {
        const result = await this.quotationsService.findAll(query);
        return {
            success: true,
            message: 'Quotations retrieved successfully',
            data: result,
        };
    }
    async findOne(id) {
        const result = await this.quotationsService.findOne(id);
        return {
            success: true,
            message: 'Quotation retrieved successfully',
            data: result,
        };
    }
    async create(createQuotationDto) {
        const result = await this.quotationsService.create(createQuotationDto);
        return {
            success: true,
            message: 'Quotation created successfully',
            data: result,
        };
    }
    async update(id, updateQuotationDto) {
        const result = await this.quotationsService.update(id, updateQuotationDto);
        return {
            success: true,
            message: 'Quotation updated successfully',
            data: result,
        };
    }
    async remove(id) {
        await this.quotationsService.remove(id);
        return {
            success: true,
            message: 'Quotation deleted successfully',
        };
    }
};
exports.QuotationsController = QuotationsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all quotations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of quotations retrieved' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuotationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a quotation by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Quotation ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Quotation found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuotationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new quotation' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Quotation created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [quotation_dto_1.CreateQuotationDto]),
    __metadata("design:returntype", Promise)
], QuotationsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a quotation / Accept and Pay Advance' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Quotation ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Quotation updated successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, quotation_dto_1.UpdateQuotationDto]),
    __metadata("design:returntype", Promise)
], QuotationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a quotation' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Quotation ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Quotation deleted successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuotationsController.prototype, "remove", null);
exports.QuotationsController = QuotationsController = __decorate([
    (0, swagger_1.ApiTags)('Quotations'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('quotations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [quotations_service_1.QuotationsService])
], QuotationsController);
//# sourceMappingURL=quotations.controller.js.map