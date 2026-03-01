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
exports.WorkOrdersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const workorders_service_1 = require("./workorders.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const workorder_dto_1 = require("./dto/workorder.dto");
let WorkOrdersController = class WorkOrdersController {
    workOrdersService;
    constructor(workOrdersService) {
        this.workOrdersService = workOrdersService;
    }
    async findAll(query) {
        const result = await this.workOrdersService.findAll(query);
        return {
            success: true,
            message: 'Work orders retrieved successfully',
            data: result,
        };
    }
    async findOne(id) {
        const result = await this.workOrdersService.findOne(id);
        return {
            success: true,
            message: 'Work order retrieved successfully',
            data: result,
        };
    }
    async create(createWorkOrderDto) {
        const result = await this.workOrdersService.create(createWorkOrderDto);
        return {
            success: true,
            message: 'Work order created successfully',
            data: result,
        };
    }
    async update(id, updateWorkOrderDto) {
        const result = await this.workOrdersService.update(id, updateWorkOrderDto);
        return {
            success: true,
            message: 'Work order updated successfully',
            data: result,
        };
    }
    async remove(id) {
        await this.workOrdersService.remove(id);
        return {
            success: true,
            message: 'Work order deleted successfully',
        };
    }
};
exports.WorkOrdersController = WorkOrdersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all work orders' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of work orders retrieved' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkOrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a work order by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Work Order ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Work Order found' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new work order' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Work Order created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workorder_dto_1.CreateWorkOrderDto]),
    __metadata("design:returntype", Promise)
], WorkOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a work order' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Work Order ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Work Order updated successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, workorder_dto_1.UpdateWorkOrderDto]),
    __metadata("design:returntype", Promise)
], WorkOrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a work order' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Work Order ID', example: 1 }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Work Order deleted successfully' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkOrdersController.prototype, "remove", null);
exports.WorkOrdersController = WorkOrdersController = __decorate([
    (0, swagger_1.ApiTags)('WorkOrders'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('workorders'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [workorders_service_1.WorkOrdersService])
], WorkOrdersController);
//# sourceMappingURL=workorders.controller.js.map