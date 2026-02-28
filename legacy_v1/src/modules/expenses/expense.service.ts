import * as expenseRepository from './expense.repository.js';

export const getAllExpenses = async () => {
    return expenseRepository.getAllExpenses();
};

export const getExpenseById = async (id: number) => {
    const expense = await expenseRepository.getExpenseById(id);
    if (!expense) throw new Error('Expense not found');
    return expense;
};

export const createExpense = async (data: any) => {
    return expenseRepository.createExpense(data);
};

export const updateExpense = async (id: number, data: any) => {
    const expense = await expenseRepository.getExpenseById(id);
    if (!expense) throw new Error('Expense not found');
    return expenseRepository.updateExpense(id, data);
};

export const deleteExpense = async (id: number) => {
    const expense = await expenseRepository.getExpenseById(id);
    if (!expense) throw new Error('Expense not found');
    return expenseRepository.deleteExpense(id);
};
