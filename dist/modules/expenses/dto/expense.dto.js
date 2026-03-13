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
exports.UpdateExpenseDto = exports.CreateExpenseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateExpenseDto {
    code;
    exp_date;
    amount;
    receipt_no;
    quote_id;
    notes;
    supplier_id;
    exptype_id;
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: false, type: () => String }, exp_date: { required: true, type: () => String }, amount: { required: true, type: () => Number }, receipt_no: { required: false, type: () => String }, quote_id: { required: false, type: () => Number }, notes: { required: false, type: () => String }, supplier_id: { required: true, type: () => String }, exptype_id: { required: true, type: () => String } };
    }
}
exports.CreateExpenseDto = CreateExpenseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Auto-generated expense code',
        example: 'EX001',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expense date', example: '2023-10-01' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "exp_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expense amount', example: 250.75 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateExpenseDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receipt number', example: 'REC-123' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "receipt_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quote ID', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateExpenseDto.prototype, "quote_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notes', example: 'Office supplies' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Supplier ID', example: 'SUP-001' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "supplier_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expense type ID', example: 'EXT-001' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "exptype_id", void 0);
class UpdateExpenseDto {
    code;
    exp_date;
    amount;
    receipt_no;
    quote_id;
    notes;
    supplier_id;
    exptype_id;
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: false, type: () => String }, exp_date: { required: false, type: () => String }, amount: { required: false, type: () => Number }, receipt_no: { required: false, type: () => String }, quote_id: { required: false, type: () => Number }, notes: { required: false, type: () => String }, supplier_id: { required: false, type: () => String }, exptype_id: { required: false, type: () => String } };
    }
}
exports.UpdateExpenseDto = UpdateExpenseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Expense code',
        example: 'EX001',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExpenseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Expense date',
        example: '2023-10-01',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExpenseDto.prototype, "exp_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Expense amount',
        example: 250.75,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateExpenseDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Receipt number',
        example: 'REC-123',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExpenseDto.prototype, "receipt_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quote ID', example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateExpenseDto.prototype, "quote_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Notes',
        example: 'Office supplies',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExpenseDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Supplier ID',
        example: 'SUP-001',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExpenseDto.prototype, "supplier_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Expense type ID',
        example: 'EXT-001',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateExpenseDto.prototype, "exptype_id", void 0);
//# sourceMappingURL=expense.dto.js.map