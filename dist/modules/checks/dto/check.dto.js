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
exports.UpdateCheckDto = exports.CreateCheckDto = exports.CheckStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var CheckStatus;
(function (CheckStatus) {
    CheckStatus["PENDING"] = "pending";
    CheckStatus["CLEARED"] = "cleared";
    CheckStatus["BOUNCED"] = "bounced";
    CheckStatus["CANCELLED"] = "cancelled";
})(CheckStatus || (exports.CheckStatus = CheckStatus = {}));
class CreateCheckDto {
    check_number;
    bank_name;
    check_date;
    amount;
    status;
    beneficiary_name;
    notes;
}
exports.CreateCheckDto = CreateCheckDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check number', example: 'CHK-123456' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCheckDto.prototype, "check_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bank name', example: 'CIB' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCheckDto.prototype, "bank_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check date', example: '2023-12-31' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCheckDto.prototype, "check_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check amount', example: 5000 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCheckDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check status',
        example: CheckStatus.PENDING,
        enum: CheckStatus,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(CheckStatus),
    __metadata("design:type", String)
], CreateCheckDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Beneficiary name', example: 'John Doe' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCheckDto.prototype, "beneficiary_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notes', example: 'Example notes' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCheckDto.prototype, "notes", void 0);
class UpdateCheckDto {
    status;
    bank_name;
    check_date;
    amount;
    notes;
    beneficiary_name;
}
exports.UpdateCheckDto = UpdateCheckDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check status',
        example: CheckStatus.CLEARED,
        enum: CheckStatus,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(CheckStatus),
    __metadata("design:type", String)
], UpdateCheckDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bank name',
        example: 'CIB',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCheckDto.prototype, "bank_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check date',
        example: '2023-12-31',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCheckDto.prototype, "check_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Check amount',
        example: 5000,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateCheckDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Notes',
        example: 'Example notes',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCheckDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Beneficiary name',
        example: 'John Doe',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCheckDto.prototype, "beneficiary_name", void 0);
//# sourceMappingURL=check.dto.js.map