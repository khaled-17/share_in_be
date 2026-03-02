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
exports.UpdateProjectTypeDto = exports.CreateProjectTypeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateProjectTypeDto {
    type;
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => String } };
    }
}
exports.CreateProjectTypeDto = CreateProjectTypeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The type of the project',
        example: 'Social Media',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectTypeDto.prototype, "type", void 0);
class UpdateProjectTypeDto {
    type;
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: false, type: () => String } };
    }
}
exports.UpdateProjectTypeDto = UpdateProjectTypeDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The type of the project',
        example: 'Social Media Management',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProjectTypeDto.prototype, "type", void 0);
//# sourceMappingURL=settings.dto.js.map