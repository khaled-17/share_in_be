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
exports.CustomerQueryDto = exports.UpdateCustomerDto = exports.CreateCustomerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCustomerDto {
    customer_id;
    name;
    contact_person;
    company_email;
    contact_email;
    phone;
    secondary_phone;
    address;
}
exports.CreateCustomerDto = CreateCustomerDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique customer identifier',
        example: 'CUST-001',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Full name of the customer',
        example: 'Middle East Tech',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contact person name',
        example: 'Ahmed Ali',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "contact_person", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Primary company email',
        example: 'info@metech.com',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "company_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contact person email',
        example: 'ahmed@metech.com',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "contact_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Primary phone number',
        example: '01012345678',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Secondary phone number',
        example: '01112345678',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "secondary_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Physical address',
        example: '123 Business St, Cairo, Egypt',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "address", void 0);
class UpdateCustomerDto {
    name;
    contact_person;
    company_email;
    contact_email;
    phone;
    secondary_phone;
    address;
}
exports.UpdateCustomerDto = UpdateCustomerDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full name of the customer', example: 'Middle East Tech', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact person name', example: 'Ahmed Ali', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "contact_person", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Primary company email', example: 'info@metech.com', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "company_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact person email', example: 'ahmed@metech.com', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "contact_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Primary phone number', example: '01012345678', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Secondary phone number', example: '01112345678', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "secondary_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Physical address', example: '123 Business St, Cairo, Egypt', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCustomerDto.prototype, "address", void 0);
class CustomerQueryDto {
    page;
    limit;
    search;
}
exports.CustomerQueryDto = CustomerQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page number', example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CustomerQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Items per page', example: 10, required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CustomerQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Search term', example: 'Tech', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CustomerQueryDto.prototype, "search", void 0);
//# sourceMappingURL=customer.dto.js.map