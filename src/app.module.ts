import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LoggerModule } from './common/logger/logger.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CustomersModule } from './modules/customers/customers.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { PartnersModule } from './modules/partners/partners.module';
import { SettingsModule } from './modules/settings/settings.module';
import { RevenueModule } from './modules/revenue/revenue.module';
import { ExpensesModule } from './modules/expenses/expenses.module';
import { QuotationsModule } from './modules/quotations/quotations.module';
import { WorkOrdersModule } from './modules/workorders/workorders.module';
import { ChecksModule } from './modules/checks/checks.module';
import { VouchersModule } from './modules/vouchers/vouchers.module';
import { ShareenModule } from './modules/shareen/shareen.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { CompanyModule } from './modules/company/company.module';
import { ReportsModule } from './modules/reports/reports.module';

@Module({
  imports: [
    PrismaModule,
    LoggerModule,
    UsersModule,
    AuthModule,
    CustomersModule,
    SuppliersModule,
    EmployeesModule,
    PartnersModule,
    SettingsModule,
    RevenueModule,
    ExpensesModule,
    QuotationsModule,
    WorkOrdersModule,
    ChecksModule,
    VouchersModule,
    ShareenModule,
    ReviewsModule,
    CompanyModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
