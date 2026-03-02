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
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateQuotationItemDto {
    description;
    unit_price;
    quantity;
    total;
    static _OPENAPI_METADATA_FACTORY() {
        return { description: { required: true, type: () => String }, unit_price: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, total: { required: true, type: () => Number } };
    }
}
exports.CreateQuotationItemDto = CreateQuotationItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Item description',
        example: 'Web Development Services',
    }),
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
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity', example: 1 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateQuotationItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total price for this item', example: 1500 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateQuotationItemDto.prototype, "total", void 0);
class CreateQuotationDto {
    customer_id;
    project_type_id;
    project_manager;
    project_name;
    quote_date;
    delivery_date;
    totalamount;
    paid_adv;
    adv_date;
    receipt_no;
    status;
    items;
    static _OPENAPI_METADATA_FACTORY() {
        return { customer_id: { required: true, type: () => String }, project_type_id: { required: false, type: () => String }, project_manager: { required: false, type: () => String }, project_name: { required: false, type: () => String }, quote_date: { required: true, type: () => String }, delivery_date: { required: false, type: () => String }, totalamount: { required: true, type: () => Number }, paid_adv: { required: false, type: () => Number }, adv_date: { required: false, type: () => String }, receipt_no: { required: false, type: () => String }, status: { required: false, type: () => String }, items: { required: true, type: () => [require("./quotation.dto").CreateQuotationItemDto] } };
    }
}
exports.CreateQuotationDto = CreateQuotationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Customer ID ref (Internal)',
        example: 'CUST-001',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuotationDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Project type ID', example: 'TYPE-001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuotationDto.prototype, "project_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Project manager', example: 'John Doe' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuotationDto.prototype, "project_manager", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Project name', example: 'Web Redesign' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuotationDto.prototype, "project_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quotation date', example: '2023-10-01' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuotationDto.prototype, "quote_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Delivery date', example: '2023-10-31' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuotationDto.prototype, "delivery_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount', example: 5000 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateQuotationDto.prototype, "totalamount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Paid advance amount', example: 1000 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateQuotationDto.prototype, "paid_adv", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Advance payment date', example: '2023-10-05' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuotationDto.prototype, "adv_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Receipt number for advance',
        example: 'REC-123',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuotationDto.prototype, "receipt_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status', example: 'Pending' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuotationDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Quotation items',
        type: [CreateQuotationItemDto],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateQuotationItemDto),
    __metadata("design:type", Array)
], CreateQuotationDto.prototype, "items", void 0);
class UpdateQuotationDto {
    customer_id;
    project_type_id;
    project_manager;
    project_name;
    quote_date;
    delivery_date;
    totalamount;
    paid_adv;
    adv_date;
    receipt_no;
    status;
    items;
    static _OPENAPI_METADATA_FACTORY() {
        return { customer_id: { required: false, type: () => String }, project_type_id: { required: false, type: () => String }, project_manager: { required: false, type: () => String }, project_name: { required: false, type: () => String }, quote_date: { required: false, type: () => String }, delivery_date: { required: false, type: () => String }, totalamount: { required: false, type: () => Number }, paid_adv: { required: false, type: () => Number }, adv_date: { required: false, type: () => String }, receipt_no: { required: false, type: () => String }, status: { required: false, type: () => String }, items: { required: false, type: () => [require("./quotation.dto").CreateQuotationItemDto] } };
    }
}
exports.UpdateQuotationDto = UpdateQuotationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Customer ID ref (Internal)',
        example: 'CUST-001',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQuotationDto.prototype, "customer_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Project type ID',
        example: 'TYPE-001',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQuotationDto.prototype, "project_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Project manager',
        example: 'John Doe',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQuotationDto.prototype, "project_manager", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Project name',
        example: 'Web Redesign',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQuotationDto.prototype, "project_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Quotation date',
        example: '2023-10-01',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQuotationDto.prototype, "quote_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Delivery date',
        example: '2023-10-31',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQuotationDto.prototype, "delivery_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount', example: 5000, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateQuotationDto.prototype, "totalamount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Paid advance amount',
        example: 1000,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateQuotationDto.prototype, "paid_adv", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Advance payment date',
        example: '2023-10-05',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQuotationDto.prototype, "adv_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Receipt number for advance',
        example: 'REC-123',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQuotationDto.prototype, "receipt_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status', example: 'Accepted', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateQuotationDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Quotation items',
        type: [CreateQuotationItemDto],
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateQuotationItemDto),
    __metadata("design:type", Array)
], UpdateQuotationDto.prototype, "items", void 0);
//# sourceMappingURL=quotation.dto.js.map