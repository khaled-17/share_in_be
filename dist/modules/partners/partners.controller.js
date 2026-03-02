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
exports.PartnersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const partners_service_1 = require("./partners.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const partner_dto_1 = require("./dto/partner.dto");
let PartnersController = class PartnersController {
    partnersService;
    constructor(partnersService) {
        this.partnersService = partnersService;
    }
    async findAll() {
        const partners = await this.partnersService.findAll();
        return {
            success: true,
            message: 'Partners retrieved successfully',
            data: partners,
        };
    }
    async findOne(id) {
        const partner = await this.partnersService.findOne(id);
        return {
            success: true,
            message: 'Partner retrieved successfully',
            data: partner,
        };
    }
    async getSummary(id) {
        const summary = await this.partnersService.getSummary(id);
        return {
            success: true,
            message: 'Partner summary retrieved successfully',
            data: summary,
        };
    }
    async create(createPartnerDto) {
        const partner = await this.partnersService.create(createPartnerDto);
        return {
            success: true,
            message: 'Partner created successfully',
            data: partner,
        };
    }
    async update(id, updatePartnerDto) {
        const partner = await this.partnersService.update(id, updatePartnerDto);
        return {
            success: true,
            message: 'Partner updated successfully',
            data: partner,
        };
    }
    async remove(id) {
        await this.partnersService.remove(id);
        return {
            success: true,
            message: 'Partner deleted successfully',
        };
    }
};
exports.PartnersController = PartnersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all partners' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of partners retrieved' }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single partner by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Internal partner ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Partner found' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/summary'),
    (0, swagger_1.ApiOperation)({ summary: 'Get partner financial summary' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Internal partner ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Summary retrieved successfully' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "getSummary", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new partner' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Partner created successfully' }),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [partner_dto_1.CreatePartnerDto]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing partner' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Internal partner ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Partner updated successfully' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, partner_dto_1.UpdatePartnerDto]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a partner' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Internal partner ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Partner deleted successfully' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PartnersController.prototype, "remove", null);
exports.PartnersController = PartnersController = __decorate([
    (0, swagger_1.ApiTags)('Partners'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('partners'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [partners_service_1.PartnersService])
], PartnersController);
//# sourceMappingURL=partners.controller.js.map