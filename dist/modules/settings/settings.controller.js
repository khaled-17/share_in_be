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
exports.SettingsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const settings_service_1 = require("./settings.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const settings_dto_1 = require("./dto/settings.dto");
let SettingsController = class SettingsController {
    settingsService;
    constructor(settingsService) {
        this.settingsService = settingsService;
    }
    async findAllProjectTypes() {
        const types = await this.settingsService.findAllProjectTypes();
        return {
            success: true,
            data: types,
        };
    }
    async createProjectType(data) {
        const type = await this.settingsService.createProjectType(data);
        return {
            success: true,
            message: 'Project type created successfully',
            data: type,
        };
    }
    async updateProjectType(id, data) {
        const type = await this.settingsService.updateProjectType(id, data);
        return {
            success: true,
            message: 'Project type updated successfully',
            data: type,
        };
    }
    async removeProjectType(id) {
        await this.settingsService.removeProjectType(id);
        return {
            success: true,
            message: 'Project type deleted successfully',
        };
    }
    async getAllCountries() {
        const countries = await this.settingsService.getAllCountries();
        return { success: true, data: countries };
    }
    async createCountry(data) {
        const country = await this.settingsService.createCountry(data);
        return {
            success: true,
            message: 'Country created successfully',
            data: country,
        };
    }
    async updateCountry(id, data) {
        const country = await this.settingsService.updateCountry(id, data);
        return {
            success: true,
            message: 'Country updated successfully',
            data: country,
        };
    }
    async deleteCountry(id) {
        await this.settingsService.deleteCountry(id);
        return { success: true, message: 'Country deleted successfully' };
    }
    async getAllExpenseTypes() {
        const types = await this.settingsService.getAllExpenseTypes();
        return { success: true, data: types };
    }
    async createExpenseType(data) {
        const type = await this.settingsService.createExpenseType(data);
        return {
            success: true,
            message: 'Expense type created successfully',
            data: type,
        };
    }
    async updateExpenseType(id, data) {
        const type = await this.settingsService.updateExpenseType(id, data);
        return {
            success: true,
            message: 'Expense type updated successfully',
            data: type,
        };
    }
    async deleteExpenseType(id) {
        await this.settingsService.deleteExpenseType(id);
        return { success: true, message: 'Expense type deleted successfully' };
    }
    async getAllRevenueTypes() {
        const types = await this.settingsService.getAllRevenueTypes();
        return { success: true, data: types };
    }
    async createRevenueType(data) {
        const type = await this.settingsService.createRevenueType(data);
        return {
            success: true,
            message: 'Revenue type created successfully',
            data: type,
        };
    }
    async updateRevenueType(id, data) {
        const type = await this.settingsService.updateRevenueType(id, data);
        return {
            success: true,
            message: 'Revenue type updated successfully',
            data: type,
        };
    }
    async deleteRevenueType(id) {
        await this.settingsService.deleteRevenueType(id);
        return { success: true, message: 'Revenue type deleted successfully' };
    }
};
exports.SettingsController = SettingsController;
__decorate([
    (0, common_1.Get)('project-types'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all project types' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of project types' }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "findAllProjectTypes", null);
__decorate([
    (0, common_1.Post)('project-types'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new project type' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Created successfully' }),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [settings_dto_1.CreateProjectTypeDto]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "createProjectType", null);
__decorate([
    (0, common_1.Put)('project-types/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing project type' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Type ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, settings_dto_1.UpdateProjectTypeDto]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "updateProjectType", null);
__decorate([
    (0, common_1.Delete)('project-types/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a project type' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Type ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "removeProjectType", null);
__decorate([
    (0, common_1.Get)('countries'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all countries' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of countries' }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "getAllCountries", null);
__decorate([
    (0, common_1.Post)('countries'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new country' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Country created successfully' }),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [settings_dto_1.CreateCountryDto]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "createCountry", null);
__decorate([
    (0, common_1.Put)('countries/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a country' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Country ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, settings_dto_1.UpdateCountryDto]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "updateCountry", null);
__decorate([
    (0, common_1.Delete)('countries/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a country' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Country ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "deleteCountry", null);
__decorate([
    (0, common_1.Get)('expense-types'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all expense types' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of expense types' }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "getAllExpenseTypes", null);
__decorate([
    (0, common_1.Post)('expense-types'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new expense type' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Expense type created successfully',
    }),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [settings_dto_1.CreateExpenseTypeDto]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "createExpenseType", null);
__decorate([
    (0, common_1.Put)('expense-types/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an expense type' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Expense Type ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, settings_dto_1.UpdateExpenseTypeDto]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "updateExpenseType", null);
__decorate([
    (0, common_1.Delete)('expense-types/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an expense type' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Expense Type ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "deleteExpenseType", null);
__decorate([
    (0, common_1.Get)('revenue-types'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all revenue types' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of revenue types' }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "getAllRevenueTypes", null);
__decorate([
    (0, common_1.Post)('revenue-types'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new revenue type' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Revenue type created successfully',
    }),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [settings_dto_1.CreateRevenueTypeDto]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "createRevenueType", null);
__decorate([
    (0, common_1.Put)('revenue-types/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a revenue type' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Revenue Type ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, settings_dto_1.UpdateRevenueTypeDto]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "updateRevenueType", null);
__decorate([
    (0, common_1.Delete)('revenue-types/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a revenue type' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Revenue Type ID', example: 1 }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "deleteRevenueType", null);
exports.SettingsController = SettingsController = __decorate([
    (0, swagger_1.ApiTags)('Settings'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('settings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [settings_service_1.SettingsService])
], SettingsController);
//# sourceMappingURL=settings.controller.js.map