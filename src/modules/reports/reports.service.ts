import * as reportsRepository from './reports.repository.js';

export const getLedgerReport = async (startDate: string, endDate: string) => {
    return reportsRepository.getLedgerData(startDate, endDate);
};
