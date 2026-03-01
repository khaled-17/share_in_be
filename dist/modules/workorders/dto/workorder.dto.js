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
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateWorkOrderDto {
    quotation_id;
    title;
    description;
    start_date;
    end_date;
    employee_id;
}
exports.CreateWorkOrderDto = CreateWorkOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal quotation ID reference', example: 1 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateWorkOrderDto.prototype, "quotation_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Work order title/summary', example: 'SEO Optimization' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWorkOrderDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detailed instructions', example: 'Perform full site audit...' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWorkOrderDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start date', example: '2023-10-10' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWorkOrderDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expected end date', example: '2023-10-20' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWorkOrderDto.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal employee ID responsible', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateWorkOrderDto.prototype, "employee_id", void 0);
class UpdateWorkOrderDto {
    status;
    description;
    employee_id;
}
exports.UpdateWorkOrderDto = UpdateWorkOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current status', example: 'In Progress', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateWorkOrderDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detailed instructions', example: 'Perform full site audit...', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateWorkOrderDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Internal employee ID responsible', example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateWorkOrderDto.prototype, "employee_id", void 0);
//# sourceMappingURL=workorder.dto.js.map