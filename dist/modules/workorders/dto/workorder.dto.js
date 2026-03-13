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
exports.UpdateWorkOrderDto = exports.CreateWorkOrderDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateWorkOrderDto {
    order_code;
    quotation_id;
    customer_id;
    static _OPENAPI_METADATA_FACTORY() {
        return { order_code: { required: false, type: () => String }, quotation_id: { required: true, type: () => Number }, customer_id: { required: true, type: () => String } };
    }
}
exports.CreateWorkOrderDto = CreateWorkOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Auto-generated unique work order code',
        example: 'WO001',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWorkOrderDto.prototype, "order_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal quotation ID reference', example: 1 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateWorkOrderDto.prototype, "quotation_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Internal customer ID reference',
        example: 'CUST-001',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWorkOrderDto.prototype, "customer_id", void 0);
class UpdateWorkOrderDto {
    order_code;
    quotation_id;
    customer_id;
    static _OPENAPI_METADATA_FACTORY() {
        return { order_code: { required: false, type: () => String }, quotation_id: { required: false, type: () => Number }, customer_id: { required: false, type: () => String } };
    }
}
exports.UpdateWorkOrderDto = UpdateWorkOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique work order code',
        example: 'WO-2023-001',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateWorkOrderDto.prototype, "order_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Internal quotation ID reference',
        example: 1,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateWorkOrderDto.prototype, "quotation_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Internal customer ID reference',
        example: 'CUST-001',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateWorkOrderDto.prototype, "customer_id", void 0);
//# sourceMappingURL=workorder.dto.js.map