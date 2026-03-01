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
exports.UpdateQuotationDto = exports.CreateQuotationDto = exports.CreateQuotationItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateQuotationItemDto {
    description;
    unit_price;
}
exports.CreateQuotationItemDto = CreateQuotationItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Item description', example: 'Web Development Services' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuotationItemDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unit price', example: 1500 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateQuotationItemDto.prototype, "unit_price", void 0);
class CreateQuotationDto {
    customer_id;
    project_type_id;
    date;
    total_amount;
    items;
}
exports.CreateQuotationDto = CreateQuotationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Customer ID ref (Internal)', example: 1 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateQuotationDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Project type ID', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateQuotationDto.prototype, "project_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quotation date', example: '2023-10-01' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuotationDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount', example: 5000 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateQuotationDto.prototype, "total_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quotation items', type: [CreateQuotationItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateQuotationItemDto),
    __metadata("design:type", Array)
], CreateQuotationDto.prototype, "items", void 0);
class UpdateQuotationDto {
    status;
    paid_adv;
    adv_date;
    receipt_no;
}
exports.UpdateQuotationDto = UpdateQuotationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of the quotation', example: 'Accepted', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQuotationDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Paid advance amount', example: 1000, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateQuotationDto.prototype, "paid_adv", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Advance payment date', example: '2023-10-05', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQuotationDto.prototype, "adv_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipt number for advance', example: 'REC-123', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQuotationDto.prototype, "receipt_no", void 0);
//# sourceMappingURL=quotation.dto.js.map