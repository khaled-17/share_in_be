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
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var VoucherSourceType;
(function (VoucherSourceType) {
    VoucherSourceType["CUSTOMER"] = "customer";
    VoucherSourceType["PARTNER_CAPITAL"] = "partner_capital";
    VoucherSourceType["ADVANCE_PAYMENT"] = "advance_payment";
    VoucherSourceType["OTHER"] = "other";
})(VoucherSourceType || (exports.VoucherSourceType = VoucherSourceType = {}));
class CheckDetailDto {
    check_number;
    bank_name;
    check_date;
    status;
    beneficiary_name;
    amount;
    static _OPENAPI_METADATA_FACTORY() {
        return { check_number: { required: false, type: () => String }, bank_name: { required: false, type: () => String }, check_date: { required: false, type: () => String }, status: { required: false, type: () => String }, beneficiary_name: { required: false, type: () => String }, amount: { required: false, type: () => Number } };
    }
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
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CheckDetailDto.prototype, "beneficiary_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CheckDetailDto.prototype, "amount", void 0);
class CreateReceiptVoucherDto {
    voucher_number;
    voucher_date;
    amount;
    customer_id;
    partner_id;
    source_type;
    payment_method;
    description;
    received_from;
    check;
    check_id;
    static _OPENAPI_METADATA_FACTORY() {
        return { voucher_number: { required: true, type: () => String }, voucher_date: { required: true, type: () => String }, amount: { required: true, type: () => Number }, customer_id: { required: false, type: () => String }, partner_id: { required: false, type: () => Number }, source_type: { required: true, enum: require("./voucher.dto").VoucherSourceType }, payment_method: { required: true, type: () => String }, description: { required: false, type: () => String }, received_from: { required: true, type: () => String }, check: { required: false, type: () => require("./voucher.dto").CheckDetailDto }, check_id: { required: false, type: () => Number } };
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
    (0, swagger_1.ApiProperty)({ description: 'Internal customer ID', example: 'CUST-001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReceiptVoucherDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal partner ID', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateReceiptVoucherDto.prototype, "partner_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Source type',
        example: VoucherSourceType.CUSTOMER,
        enum: VoucherSourceType,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(VoucherSourceType),
    __metadata("design:type", String)
], CreateReceiptVoucherDto.prototype, "source_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment method', example: 'cash' }),
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
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", CheckDetailDto)
], CreateReceiptVoucherDto.prototype, "check", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check ID (if payment method is Check)',
        example: 1,
        required: false,
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
    static _OPENAPI_METADATA_FACTORY() {
        return { beneficiary_type: { required: false, type: () => String }, supplier_id: { required: false, type: () => String }, employee_id: { required: false, type: () => String }, expense_type_id: { required: false, type: () => String }, paid_to: { required: true, type: () => String } };
    }
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