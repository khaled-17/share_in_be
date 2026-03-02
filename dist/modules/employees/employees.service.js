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
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let EmployeesService = class EmployeesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(params) {
        const { skip, take, search } = params;
        const where = search
            ? {
                OR: [
                    { name: { contains: search } },
                    { emp_code: { contains: search } },
                    { phone: { contains: search } },
                    { position: { contains: search } },
                ],
            }
            : {};
        const [employees, total] = await Promise.all([
            this.prisma.employee.findMany({
                skip,
                take,
                where,
                orderBy: { id: 'desc' },
            }),
            this.prisma.employee.count({ where }),
        ]);
        return { employees, total };
    }
    async findOne(id) {
        await this.prisma.employee.findUnique({
            where: { id },
        });
        if (!employee) {
            throw new common_1.NotFoundException('Employee not found');
        }
        return employee;
    }
    async findByEmpCode(emp_code) {
        return this.prisma.employee.findUnique({
            where: { emp_code },
        });
    }
    async create(data) {
        if (data.emp_code) {
            const existing = await this.findByEmpCode(data.emp_code);
            if (existing) {
                throw new common_1.ConflictException('Employee Code already exists');
            }
        }
        return this.prisma.employee.create({ data });
    }
    async update(id, data) {
        await this.findOne(id);
        if (data.emp_code && typeof data.emp_code === 'string') {
            const existing = await this.findByEmpCode(data.emp_code);
            if (existing && existing.id !== id) {
                throw new common_1.ConflictException('Employee Code already exists');
            }
        }
        return this.prisma.employee.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.employee.delete({
            where: { id },
        });
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeesService);
//# sourceMappingURL=employees.service.js.map