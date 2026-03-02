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
exports.UpdateSupplierDto = exports.CreateSupplierDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSupplierDto {
    supplier_id;
    name;
    contact_person;
    email;
    phone;
    secondary_phone;
    address;
    speciality;
    static _OPENAPI_METADATA_FACTORY() {
        return { supplier_id: { required: true, type: () => String }, name: { required: true, type: () => String }, contact_person: { required: false, type: () => String }, email: { required: false, type: () => String, format: "email" }, phone: { required: false, type: () => String }, secondary_phone: { required: false, type: () => String }, address: { required: false, type: () => String }, speciality: { required: false, type: () => String } };
    }
}
exports.CreateSupplierDto = CreateSupplierDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique supplier identifier',
        example: 'SUP-001',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "supplier_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company name', example: 'Global Logistics' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contact person name', example: 'Jane Smith' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "contact_person", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Company email',
        example: 'contact@globallog.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Primary phone number', example: '01098765432' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Secondary phone number',
        example: '01198765432',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "secondary_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Physical address',
        example: '456 Supply Rd, Alexandria, Egypt',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Business speciality',
        example: 'General Supplies',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "speciality", void 0);
class UpdateSupplierDto {
    name;
    contact_person;
    email;
    phone;
    secondary_phone;
    address;
    speciality;
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: false, type: () => String }, contact_person: { required: false, type: () => String }, email: { required: false, type: () => String, format: "email" }, phone: { required: false, type: () => String }, secondary_phone: { required: false, type: () => String }, address: { required: false, type: () => String }, speciality: { required: false, type: () => String } };
    }
}
exports.UpdateSupplierDto = UpdateSupplierDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Company name',
        example: 'Global Logistics',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSupplierDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contact person name',
        example: 'Jane Smith',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSupplierDto.prototype, "contact_person", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Company email',
        example: 'contact@globallog.com',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateSupplierDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Primary phone number',
        example: '01098765432',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSupplierDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Secondary phone number',
        example: '01198765432',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSupplierDto.prototype, "secondary_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Physical address',
        example: '456 Supply Rd, Alexandria, Egypt',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSupplierDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Business speciality',
        example: 'General Supplies',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSupplierDto.prototype, "speciality", void 0);
//# sourceMappingURL=supplier.dto.js.map