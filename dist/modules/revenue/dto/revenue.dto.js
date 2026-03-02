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
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateRevenueDto {
    code;
    rev_date;
    amount;
    receipt_no;
    quote_id;
    notes;
    customer_id;
    revtype_id;
}
exports.CreateRevenueDto = CreateRevenueDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue transaction code', example: 'REV-001', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRevenueDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction date', example: '2023-10-01' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRevenueDto.prototype, "rev_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue amount', example: 1500.5 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRevenueDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Receipt number (Receipt #, etc.)',
        example: 'REC-001',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRevenueDto.prototype, "receipt_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal quotation ID reference', example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRevenueDto.prototype, "quote_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notes or description', example: 'Installation Service', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRevenueDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID', example: 'CUST-001' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRevenueDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue Type ID', example: 'TYPE-001' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRevenueDto.prototype, "revtype_id", void 0);
class UpdateRevenueDto {
    code;
    rev_date;
    amount;
    receipt_no;
    quote_id;
    notes;
    customer_id;
    revtype_id;
}
exports.UpdateRevenueDto = UpdateRevenueDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue transaction code', example: 'REV-001', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRevenueDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction date', example: '2023-10-01', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRevenueDto.prototype, "rev_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue amount', example: 1500.5, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateRevenueDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipt number', example: 'REC-001', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRevenueDto.prototype, "receipt_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal quotation ID reference', example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateRevenueDto.prototype, "quote_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notes or description', example: 'Installation Service', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRevenueDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID', example: 'CUST-001', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRevenueDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue Type ID', example: 'TYPE-001', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRevenueDto.prototype, "revtype_id", void 0);
//# sourceMappingURL=revenue.dto.js.map