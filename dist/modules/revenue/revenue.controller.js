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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const revenue_service_1 = require("./revenue.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const revenue_dto_1 = require("./dto/revenue.dto");
let RevenueController = class RevenueController {
    revenueService;
    constructor(revenueService) {
        this.revenueService = revenueService;
    }
    async findAll(query) {
        const result = await this.revenueService.findAll(query);
        return {
            success: true,
            message: 'Revenues retrieved successfully',
            data: result,
        };
    }
    async findOne(id) {
        const result = await this.revenueService.findOne(id);
        return {
            success: true,
            message: 'Revenue retrieved successfully',
            data: result,
        };
    }
    async create(createRevenueDto) {
        const result = await this.revenueService.create(createRevenueDto);
        return {
            success: true,
            message: 'Revenue created successfully',
            data: result,
        };
    }
    async update(id, updateRevenueDto) {
        const result = await this.revenueService.update(id, updateRevenueDto);
        return {
            success: true,
            message: 'Revenue updated successfully',
            data: result,
        };
    }
    async remove(id) {
        await this.revenueService.remove(id);
        return {
            success: true,
            message: 'Revenue deleted successfully',
        };
    }
};
exports.RevenueController = RevenueController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve revenue transactions' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of revenue transactions' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof RevenueFilters !== "undefined" && RevenueFilters) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], RevenueController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a revenue transaction by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Revenue ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Transaction found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RevenueController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new revenue transaction' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Transaction created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [revenue_dto_1.CreateRevenueDto]),
    __metadata("design:returntype", Promise)
], RevenueController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a revenue transaction' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Revenue ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Transaction updated successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, revenue_dto_1.UpdateRevenueDto]),
    __metadata("design:returntype", Promise)
], RevenueController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a revenue transaction' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Revenue ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Transaction deleted successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RevenueController.prototype, "remove", null);
exports.RevenueController = RevenueController = __decorate([
    (0, swagger_1.ApiTags)('Revenue'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('revenue'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [revenue_service_1.RevenueService])
], RevenueController);
//# sourceMappingURL=revenue.controller.js.map