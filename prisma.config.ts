import { defineConfig } from '@prisma/config';

export default defineConfig({
    // @ts-ignore
    earlyAccess: true,
    // @ts-ignore
    seed: 'tsx prisma/seed.ts',
});
