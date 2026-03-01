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
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var CheckStatus;
(function (CheckStatus) {
    CheckStatus["UNDELIVERED"] = "\u063A\u064A\u0631 \u0645\u0633\u062A\u0644\u0645";
    CheckStatus["DELIVERED"] = "\u0645\u0633\u062A\u0644\u0645";
    CheckStatus["COLLECTED"] = "\u0645\u062D\u0635\u0644";
    CheckStatus["REJECTED"] = "\u0645\u0631\u0641\u0648\u0636";
})(CheckStatus || (exports.CheckStatus = CheckStatus = {}));
class CreateCheckDto {
    check_no;
    bank_name;
    due_date;
    amount;
    status;
    static _OPENAPI_METADATA_FACTORY() {
        return { check_no: { required: true, type: () => String }, bank_name: { required: true, type: () => String }, due_date: { required: true, type: () => String }, amount: { required: true, type: () => Number }, status: { required: false, enum: require("./check.dto").CheckStatus } };
    }
}
exports.CreateCheckDto = CreateCheckDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check number', example: 'CHK-123456' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCheckDto.prototype, "check_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bank name', example: 'CIB' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCheckDto.prototype, "bank_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Due date', example: '2023-12-31' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCheckDto.prototype, "due_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check amount', example: 5000 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCheckDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check status', example: CheckStatus.UNDELIVERED, enum: CheckStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(CheckStatus),
    __metadata("design:type", String)
], CreateCheckDto.prototype, "status", void 0);
class UpdateCheckDto {
    status;
    bank_name;
    due_date;
    amount;
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: false, enum: require("./check.dto").CheckStatus }, bank_name: { required: false, type: () => String }, due_date: { required: false, type: () => String }, amount: { required: false, type: () => Number } };
    }
}
exports.UpdateCheckDto = UpdateCheckDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check status', example: CheckStatus.COLLECTED, enum: CheckStatus, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(CheckStatus),
    __metadata("design:type", String)
], UpdateCheckDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Bank name', example: 'CIB', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCheckDto.prototype, "bank_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Due date', example: '2023-12-31', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCheckDto.prototype, "due_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Check amount', example: 5000, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateCheckDto.prototype, "amount", void 0);
//# sourceMappingURL=check.dto.js.map