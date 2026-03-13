import { ConflictException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

export const CODE_PREFIX = {
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
} as const;

const DEFAULT_CODE_DIGITS = 3;

export function getNextCode(
  prefix: string,
  latestCode?: string | null,
  minDigits = DEFAULT_CODE_DIGITS,
) {
  const pattern = new RegExp(`^${prefix}(\\d+)$`);
  const match = latestCode?.match(pattern);
  const nextNumber = match ? Number.parseInt(match[1], 10) + 1 : 1;
  const digits = Math.max(minDigits, match?.[1].length ?? minDigits);

  return `${prefix}${nextNumber.toString().padStart(digits, '0')}`;
}

function isUniqueConstraintError(error: unknown, uniqueField: string) {
  if (!(error instanceof Prisma.PrismaClientKnownRequestError)) {
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

export async function createWithGeneratedCode<T>({
  generateCode,
  createRecord,
  uniqueField,
  entityLabel,
}: {
  generateCode: () => Promise<string>;
  createRecord: (code: string) => Promise<T>;
  uniqueField: string;
  entityLabel: string;
}) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const code = await generateCode();

    try {
      return await createRecord(code);
    } catch (error) {
      if (isUniqueConstraintError(error, uniqueField)) {
        continue;
      }

      throw error;
    }
  }

  throw new ConflictException(
    `Failed to generate a unique ${entityLabel} code. Please try again.`,
  );
}
