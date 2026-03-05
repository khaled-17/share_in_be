"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const logger_module_1 = require("./common/logger/logger.module");
const users_module_1 = require("./modules/users/users.module");
const auth_module_1 = require("./modules/auth/auth.module");
const customers_module_1 = require("./modules/customers/customers.module");
const suppliers_module_1 = require("./modules/suppliers/suppliers.module");
const employees_module_1 = require("./modules/employees/employees.module");
const partners_module_1 = require("./modules/partners/partners.module");
const settings_module_1 = require("./modules/settings/settings.module");
const revenue_module_1 = require("./modules/revenue/revenue.module");
const expenses_module_1 = require("./modules/expenses/expenses.module");
const quotations_module_1 = require("./modules/quotations/quotations.module");
const workorders_module_1 = require("./modules/workorders/workorders.module");
const checks_module_1 = require("./modules/checks/checks.module");
const vouchers_module_1 = require("./modules/vouchers/vouchers.module");
const shareen_module_1 = require("./modules/shareen/shareen.module");
const reviews_module_1 = require("./modules/reviews/reviews.module");
const company_module_1 = require("./modules/company/company.module");
const reports_module_1 = require("./modules/reports/reports.module");
const roles_module_1 = require("./modules/roles/roles.module");
const permissions_module_1 = require("./modules/permissions/permissions.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            logger_module_1.LoggerModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            customers_module_1.CustomersModule,
            suppliers_module_1.SuppliersModule,
            employees_module_1.EmployeesModule,
            partners_module_1.PartnersModule,
            settings_module_1.SettingsModule,
            revenue_module_1.RevenueModule,
            expenses_module_1.ExpensesModule,
            quotations_module_1.QuotationsModule,
            workorders_module_1.WorkOrdersModule,
            checks_module_1.ChecksModule,
            vouchers_module_1.VouchersModule,
            shareen_module_1.ShareenModule,
            reviews_module_1.ReviewsModule,
            company_module_1.CompanyModule,
            reports_module_1.ReportsModule,
            roles_module_1.RolesModule,
            permissions_module_1.PermissionsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map