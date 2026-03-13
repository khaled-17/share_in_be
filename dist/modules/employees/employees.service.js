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
const code_generator_1 = require("../../common/utils/code-generator");
let EmployeesService = class EmployeesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateEmployeeCode() {
        const latestEmployee = await this.prisma.employee.findFirst({
            where: { emp_code: { startsWith: code_generator_1.CODE_PREFIX.employee } },
            orderBy: { id: 'desc' },
            select: { emp_code: true },
        });
        return (0, code_generator_1.getNextCode)(code_generator_1.CODE_PREFIX.employee, latestEmployee?.emp_code);
    }
    async findAll(params = {}) {
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
        const employee = await this.prisma.employee.findUnique({
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
        const rest = { ...data };
        delete rest.emp_code;
        return (0, code_generator_1.createWithGeneratedCode)({
            generateCode: () => this.generateEmployeeCode(),
            createRecord: (emp_code) => this.prisma.employee.create({
                data: { ...rest, emp_code },
            }),
            uniqueField: 'emp_code',
            entityLabel: 'employee',
        });
    }
    async update(id, data) {
        await this.findOne(id);
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