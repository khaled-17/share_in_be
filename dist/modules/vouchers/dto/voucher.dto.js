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
exports.CreatePaymentVoucherDto = exports.CreateReceiptVoucherDto = exports.CheckDetailDto = exports.VoucherSourceType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var VoucherSourceType;
(function (VoucherSourceType) {
    VoucherSourceType["PARTNER_CAPITAL"] = "partner_capital";
    VoucherSourceType["OTHERS"] = "others";
})(VoucherSourceType || (exports.VoucherSourceType = VoucherSourceType = {}));
class CheckDetailDto {
    check_number;
    bank_name;
    check_date;
    status;
}
exports.CheckDetailDto = CheckDetailDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckDetailDto.prototype, "check_number", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckDetailDto.prototype, "bank_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckDetailDto.prototype, "check_date", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckDetailDto.prototype, "status", void 0);
class CreateReceiptVoucherDto {
    voucher_number;
    voucher_date;
    amount;
    partner_id;
    source_type;
    payment_method;
    description;
    received_from;
    check;
    check_id;
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
    (0, swagger_1.ApiProperty)({
        description: 'Source type',
        example: VoucherSourceType.PARTNER_CAPITAL,
        enum: VoucherSourceType,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(VoucherSourceType),
    __metadata("design:type", String)
], CreateReceiptVoucherDto.prototype, "source_type", void 0);
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
    (0, swagger_1.ApiProperty)({ description: 'Received from', example: 'John Doe' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReceiptVoucherDto.prototype, "received_from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check detail (if payment method is Check)',
        type: CheckDetailDto,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", CheckDetailDto)
], CreateReceiptVoucherDto.prototype, "check", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check ID (if payment method is Check)',
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateReceiptVoucherDto.prototype, "check_id", void 0);
class CreatePaymentVoucherDto extends CreateReceiptVoucherDto {
    beneficiary_type;
    supplier_id;
    employee_id;
    expense_type_id;
    paid_to;
}
exports.CreatePaymentVoucherDto = CreatePaymentVoucherDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Beneficiary type', example: 'supplier' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentVoucherDto.prototype, "beneficiary_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Supplier ID', example: 'SUP-001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentVoucherDto.prototype, "supplier_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Employee ID', example: 'EMP-001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentVoucherDto.prototype, "employee_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expense type ID', example: 'EXP-001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentVoucherDto.prototype, "expense_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Paid to', example: 'Supplier Name' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentVoucherDto.prototype, "paid_to", void 0);
//# sourceMappingURL=voucher.dto.js.map