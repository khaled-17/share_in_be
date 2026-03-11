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
exports.UpdateRevenueTypeDto = exports.CreateRevenueTypeDto = exports.UpdateExpenseTypeDto = exports.CreateExpenseTypeDto = exports.UpdateCountryDto = exports.CreateCountryDto = exports.UpdateProjectTypeDto = exports.CreateProjectTypeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateProjectTypeDto {
    type_id;
    type_name;
    static _OPENAPI_METADATA_FACTORY() {
        return { type_id: { required: true, type: () => String }, type_name: { required: true, type: () => String } };
    }
}
exports.CreateProjectTypeDto = CreateProjectTypeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Project Type ID',
        example: 'P001',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectTypeDto.prototype, "type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the project type',
        example: 'Social Media',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectTypeDto.prototype, "type_name", void 0);
class UpdateProjectTypeDto {
    type_name;
    static _OPENAPI_METADATA_FACTORY() {
        return { type_name: { required: false, type: () => String } };
    }
}
exports.UpdateProjectTypeDto = UpdateProjectTypeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the project type',
        example: 'Social Media Management',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProjectTypeDto.prototype, "type_name", void 0);
class CreateCountryDto {
    country_code;
    country_name;
    static _OPENAPI_METADATA_FACTORY() {
        return { country_code: { required: true, type: () => String }, country_name: { required: true, type: () => String } };
    }
}
exports.CreateCountryDto = CreateCountryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique country code (e.g. EG, SA, US)',
        example: 'EG',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "country_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Country name',
        example: 'Egypt',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "country_name", void 0);
class UpdateCountryDto {
    country_code;
    country_name;
    static _OPENAPI_METADATA_FACTORY() {
        return { country_code: { required: false, type: () => String }, country_name: { required: false, type: () => String } };
    }
}
exports.UpdateCountryDto = UpdateCountryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country code', example: 'EG', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCountryDto.prototype, "country_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Country name',
        example: 'Egypt',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCountryDto.prototype, "country_name", void 0);
class CreateExpenseTypeDto {
    exptype_id;
    exptype_name;
    category;
    static _OPENAPI_METADATA_FACTORY() {
        return { exptype_id: { required: true, type: () => String }, exptype_name: { required: true, type: () => String }, category: { required: false, type: () => String } };
    }
}
exports.CreateExpenseTypeDto = CreateExpenseTypeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expense type ID', example: 'EXP001' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExpenseTypeDto.prototype, "exptype_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expense type name', example: 'Office Supplies' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExpenseTypeDto.prototype, "exptype_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category', example: 'General', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExpenseTypeDto.prototype, "category", void 0);
class UpdateExpenseTypeDto {
    exptype_name;
    category;
    static _OPENAPI_METADATA_FACTORY() {
        return { exptype_name: { required: false, type: () => String }, category: { required: false, type: () => String } };
    }
}
exports.UpdateExpenseTypeDto = UpdateExpenseTypeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Expense type name',
        example: 'Office Supplies',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExpenseTypeDto.prototype, "exptype_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category', example: 'General', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExpenseTypeDto.prototype, "category", void 0);
class CreateRevenueTypeDto {
    revtype_id;
    revtype_name;
    paymethod;
    static _OPENAPI_METADATA_FACTORY() {
        return { revtype_id: { required: true, type: () => String }, revtype_name: { required: true, type: () => String }, paymethod: { required: false, type: () => String } };
    }
}
exports.CreateRevenueTypeDto = CreateRevenueTypeDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue type ID', example: 'REV001' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRevenueTypeDto.prototype, "revtype_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue type name', example: 'Consulting' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRevenueTypeDto.prototype, "revtype_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment method',
        example: 'Visa',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRevenueTypeDto.prototype, "paymethod", void 0);
class UpdateRevenueTypeDto {
    revtype_name;
    paymethod;
    static _OPENAPI_METADATA_FACTORY() {
        return { revtype_name: { required: false, type: () => String }, paymethod: { required: false, type: () => String } };
    }
}
exports.UpdateRevenueTypeDto = UpdateRevenueTypeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Revenue type name',
        example: 'Consulting',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRevenueTypeDto.prototype, "revtype_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Payment method',
        example: 'Visa',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRevenueTypeDto.prototype, "paymethod", void 0);
//# sourceMappingURL=settings.dto.js.map