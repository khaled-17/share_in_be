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
exports.ShareenController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const shareen_service_1 = require("./shareen.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const shareen_dto_1 = require("./dto/shareen.dto");
let ShareenController = class ShareenController {
    shareenService;
    constructor(shareenService) {
        this.shareenService = shareenService;
    }
    async findAll(query) {
        const logs = await this.shareenService.findAll(query);
        return {
            success: true,
            message: 'Shareen logs retrieved successfully',
            data: logs,
        };
    }
    async create(createShareenDto) {
        const log = await this.shareenService.create(createShareenDto);
        return {
            success: true,
            message: 'Log created successfully',
            data: log,
        };
    }
    async remove(id) {
        await this.shareenService.remove(id);
        return {
            success: true,
            message: 'Log deleted successfully',
        };
    }
};
exports.ShareenController = ShareenController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve shareen logs' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of shareen entries' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShareenController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Log a new shareen action' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Logged successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shareen_dto_1.CreateShareenDto]),
    __metadata("design:returntype", Promise)
], ShareenController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a shareen log entry' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Log ID', example: 1 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ShareenController.prototype, "remove", null);
exports.ShareenController = ShareenController = __decorate([
    (0, swagger_1.ApiTags)('Shareen'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('shareen'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [shareen_service_1.ShareenService])
], ShareenController);
//# sourceMappingURL=shareen.controller.js.map