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
exports.ChecksController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const checks_service_1 = require("./checks.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const check_dto_1 = require("./dto/check.dto");
let ChecksController = class ChecksController {
    checksService;
    constructor(checksService) {
        this.checksService = checksService;
    }
    async findAll(query) {
        const result = await this.checksService.findAll(query);
        return {
            success: true,
            message: 'Checks retrieved successfully',
            data: result,
        };
    }
    async getStats(query) {
        const result = await this.checksService.getStats(query);
        return {
            success: true,
            message: 'Summary statistics retrieved successfully',
            data: result,
        };
    }
    async getDueSoon() {
        const result = await this.checksService.getDueSoon();
        return {
            success: true,
            message: 'Pending checks retrieved successfully',
            data: result,
        };
    }
    async updateStatus(id, updateCheckStatusDto) {
        const result = await this.checksService.updateStatus(id, updateCheckStatusDto);
        return {
            success: true,
            message: 'Check status updated successfully',
            data: result,
        };
    }
    async findOne(id) {
        const result = await this.checksService.findOne(id);
        return {
            success: true,
            message: 'Check retrieved successfully',
            data: result,
        };
    }
    async create(createCheckDto) {
        const result = await this.checksService.create(createCheckDto);
        return {
            success: true,
            message: 'Check created successfully',
            data: result,
        };
    }
    async update(id, updateCheckDto) {
        const result = await this.checksService.update(id, updateCheckDto);
        return {
            success: true,
            message: 'Check updated successfully',
            data: result,
        };
    }
    async remove(id) {
        await this.checksService.remove(id);
        return {
            success: true,
            message: 'Check deleted successfully',
        };
    }
};
exports.ChecksController = ChecksController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all checks' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of checks retrieved' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checks_service_1.CheckFilters]),
    __metadata("design:returntype", Promise)
], ChecksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('stats/summary'),
    (0, swagger_1.ApiOperation)({ summary: 'Get checks statistics summary' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Summary statistics retrieved' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checks_service_1.CheckFilters]),
    __metadata("design:returntype", Promise)
], ChecksController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('pending/due-soon'),
    (0, swagger_1.ApiOperation)({ summary: 'Get pending checks due soon' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Checks retrieved successfully' }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChecksController.prototype, "getDueSoon", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a check status' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Check ID', example: 1 }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Check status updated successfully',
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, check_dto_1.UpdateCheckStatusDto]),
    __metadata("design:returntype", Promise)
], ChecksController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a check by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Check ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Check found' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChecksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new check' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Check created successfully' }),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [check_dto_1.CreateCheckDto]),
    __metadata("design:returntype", Promise)
], ChecksController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a check' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Check ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Check updated successfully' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, check_dto_1.UpdateCheckDto]),
    __metadata("design:returntype", Promise)
], ChecksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a check' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Check ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Check deleted successfully' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChecksController.prototype, "remove", null);
exports.ChecksController = ChecksController = __decorate([
    (0, swagger_1.ApiTags)('Checks'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('checks'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [checks_service_1.ChecksService])
], ChecksController);
//# sourceMappingURL=checks.controller.js.map