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
exports.SuppliersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const suppliers_service_1 = require("./suppliers.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const supplier_dto_1 = require("./dto/supplier.dto");
let SuppliersController = class SuppliersController {
    suppliersService;
    constructor(suppliersService) {
        this.suppliersService = suppliersService;
    }
    async findAll(query) {
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 10;
        const search = query.search;
        const skip = (page - 1) * limit;
        const { suppliers, total } = await this.suppliersService.findAll({
            skip,
            take: limit,
            search,
        });
        return {
            success: true,
            message: 'Suppliers retrieved successfully',
            data: suppliers,
            pagination: {
                page,
                limit,
                total,
            },
        };
    }
    async findOne(id) {
        const supplier = await this.suppliersService.findOne(id);
        return {
            success: true,
            message: 'Supplier retrieved successfully',
            data: supplier,
        };
    }
    async create(createSupplierDto) {
        const supplier = await this.suppliersService.create(createSupplierDto);
        return {
            success: true,
            message: 'Supplier created successfully',
            data: supplier,
        };
    }
    async update(id, updateSupplierDto) {
        const supplier = await this.suppliersService.update(id, updateSupplierDto);
        return {
            success: true,
            message: 'Supplier updated successfully',
            data: supplier,
        };
    }
    async remove(id) {
        await this.suppliersService.remove(id);
        return {
            success: true,
            message: 'Supplier deleted successfully',
        };
    }
};
exports.SuppliersController = SuppliersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all suppliers' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of suppliers retrieved' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SuppliersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single supplier by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Supplier ID', example: 'SUP-001' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Supplier found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Supplier not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SuppliersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new supplier' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Supplier created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [supplier_dto_1.CreateSupplierDto]),
    __metadata("design:returntype", Promise)
], SuppliersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing supplier' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Supplier ID', example: 'SUP-001' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Supplier updated successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, supplier_dto_1.UpdateSupplierDto]),
    __metadata("design:returntype", Promise)
], SuppliersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a supplier' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Supplier ID', example: 'SUP-001' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Supplier deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SuppliersController.prototype, "remove", null);
exports.SuppliersController = SuppliersController = __decorate([
    (0, swagger_1.ApiTags)('Suppliers'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('suppliers'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [suppliers_service_1.SuppliersService])
], SuppliersController);
//# sourceMappingURL=suppliers.controller.js.map