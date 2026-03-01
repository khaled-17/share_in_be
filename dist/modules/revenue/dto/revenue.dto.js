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
exports.UpdateRevenueDto = exports.CreateRevenueDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateRevenueDto {
    quotation_id;
    date;
    amount;
    source;
    payment_method;
    reference;
    static _OPENAPI_METADATA_FACTORY() {
        return { quotation_id: { required: true, type: () => Number }, date: { required: true, type: () => String }, amount: { required: true, type: () => Number }, source: { required: true, type: () => String }, payment_method: { required: false, type: () => String }, reference: { required: false, type: () => String } };
    }
}
exports.CreateRevenueDto = CreateRevenueDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal quotation ID reference', example: 1 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRevenueDto.prototype, "quotation_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction date', example: '2023-10-01' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateRevenueDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue amount', example: 1500.50 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRevenueDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue source or description', example: 'Installation Service' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRevenueDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method', example: 'Cash', enum: ['Cash', 'Bank Transfer', 'Check'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRevenueDto.prototype, "payment_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reference number (Receipt #, etc.)', example: 'REC-001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRevenueDto.prototype, "reference", void 0);
class UpdateRevenueDto {
    date;
    amount;
    source;
    payment_method;
    reference;
    static _OPENAPI_METADATA_FACTORY() {
        return { date: { required: false, type: () => String }, amount: { required: false, type: () => Number }, source: { required: false, type: () => String }, payment_method: { required: false, type: () => String }, reference: { required: false, type: () => String } };
    }
}
exports.UpdateRevenueDto = UpdateRevenueDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction date', example: '2023-10-01', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateRevenueDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue amount', example: 1500.50, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateRevenueDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue source or description', example: 'Installation Service', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRevenueDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method', example: 'Cash', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRevenueDto.prototype, "payment_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reference number', example: 'REC-001', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRevenueDto.prototype, "reference", void 0);
//# sourceMappingURL=revenue.dto.js.map