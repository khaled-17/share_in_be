"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CODE_PREFIX = void 0;
exports.getNextCode = getNextCode;
exports.createWithGeneratedCode = createWithGeneratedCode;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
exports.CODE_PREFIX = {
    customer: 'CU',
    supplier: 'SU',
    employee: 'EM',
    partner: 'PA',
    revenue: 'RE',
    expense: 'EX',
    workOrder: 'WO',
    receiptVoucher: 'RV',
    paymentVoucher: 'PV',
    projectType: 'PT',
    expenseType: 'ET',
    revenueType: 'RT',
    country: 'CO',
};
const DEFAULT_CODE_DIGITS = 3;
function getNextCode(prefix, latestCode, minDigits = DEFAULT_CODE_DIGITS) {
    const pattern = new RegExp(`^${prefix}(\\d+)$`);
    const match = latestCode?.match(pattern);
    const nextNumber = match ? Number.parseInt(match[1], 10) + 1 : 1;
    const digits = Math.max(minDigits, match?.[1].length ?? minDigits);
    return `${prefix}${nextNumber.toString().padStart(digits, '0')}`;
}
function isUniqueConstraintError(error, uniqueField) {
    if (!(error instanceof client_1.Prisma.PrismaClientKnownRequestError)) {
        return false;
    }
    if (error.code !== 'P2002') {
        return false;
    }
    const target = error.meta?.target;
    if (Array.isArray(target)) {
        return target.includes(uniqueField);
    }
    return typeof target === 'string' && target.includes(uniqueField);
}
async function createWithGeneratedCode({ generateCode, createRecord, uniqueField, entityLabel, }) {
    for (let attempt = 0; attempt < 5; attempt += 1) {
        const code = await generateCode();
        try {
            return await createRecord(code);
        }
        catch (error) {
            if (isUniqueConstraintError(error, uniqueField)) {
                continue;
            }
            throw error;
        }
    }
    throw new common_1.ConflictException(`Failed to generate a unique ${entityLabel} code. Please try again.`);
}
//# sourceMappingURL=code-generator.js.map