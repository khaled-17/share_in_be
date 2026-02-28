import * as reportsRepository from './reports.repository.js';
export const getLedgerReport = async (startDate, endDate) => {
    return reportsRepository.getLedgerData(startDate, endDate);
};
