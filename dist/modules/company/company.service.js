import * as companyRepository from './company.repository.js';
export const getSettings = async () => {
    return companyRepository.getSettings();
};
export const updateSettings = async (data) => {
    return companyRepository.updateSettings(data);
};
