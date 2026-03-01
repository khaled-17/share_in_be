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
exports.CreatePaymentVoucherDto = exports.CreateReceiptVoucherDto = exports.VoucherSourceType = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var VoucherSourceType;
(function (VoucherSourceType) {
    VoucherSourceType["PARTNER"] = "\u0634\u0631\u064A\u0643";
    VoucherSourceType["OTHERS"] = "\u0623\u062E\u0631\u0649";
})(VoucherSourceType || (exports.VoucherSourceType = VoucherSourceType = {}));
class CreateReceiptVoucherDto {
    voucher_number;
    voucher_date;
    amount;
    partner_id;
    source_type;
    name;
    payment_method;
    description;
    check_id;
    static _OPENAPI_METADATA_FACTORY() {
        return { voucher_number: { required: true, type: () => String }, voucher_date: { required: true, type: () => String }, amount: { required: true, type: () => Number }, partner_id: { required: false, type: () => Number }, source_type: { required: true, enum: require("./voucher.dto").VoucherSourceType }, name: { required: false, type: () => String }, payment_method: { required: true, type: () => String }, description: { required: false, type: () => String }, check_id: { required: false, type: () => Number } };
    }
}
exports.CreateReceiptVoucherDto = CreateReceiptVoucherDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher number', example: 'REC-001' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReceiptVoucherDto.prototype, "voucher_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher date', example: '2023-10-01' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReceiptVoucherDto.prototype, "voucher_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Voucher amount', example: 1000 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateReceiptVoucherDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal partner ID', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateReceiptVoucherDto.prototype, "partner_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Source type', example: VoucherSourceType.PARTNER, enum: VoucherSourceType }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(VoucherSourceType),
    __metadata("design:type", String)
], CreateReceiptVoucherDto.prototype, "source_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name (if source is Others)', example: 'John Smith' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReceiptVoucherDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method', example: 'Cash' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReceiptVoucherDto.prototype, "payment_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description', example: 'Advance payment' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReceiptVoucherDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check ID (if payment method is Check)', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateReceiptVoucherDto.prototype, "check_id", void 0);
class CreatePaymentVoucherDto extends CreateReceiptVoucherDto {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreatePaymentVoucherDto = CreatePaymentVoucherDto;
//# sourceMappingURL=voucher.dto.js.map