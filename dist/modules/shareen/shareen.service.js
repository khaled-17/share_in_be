import * as shareenRepository from './shareen.repository.js';
export const getAllShareen = async () => {
    return shareenRepository.getAllShareen();
};
export const createShareen = async (data) => {
    return shareenRepository.createShareen(data);
};
