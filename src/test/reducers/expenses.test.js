import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set up default expenses values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add expense to expenses', () => {
    const expense = {
        id: '4',
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    };
    const action = { type: 'ADD_EXPENSE', expense };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should remove expense with valid id from expenses', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '1' };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]])
});

test('should not remove any if invalid id passed in', () => {
    const action = { type: 'REMOVE_EXPENSE', id: 'not valid'};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense with values passed in', () => {
    const updates = {
        description: 'Modified description',
        note: 'Modified note',
        amount: 200,
        createdAt: 100
    };
    const action = {type: 'EDIT_EXPENSE', id: '1', updates };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({
        ...updates,
        id:'1'
    });
});

test('should not edit expense if expense not found', () => {
    const updates = {
        description: 'Modified description',
        note: 'Modified note',
        amount: 200,
        createdAt: 100
    };
    const action = {type: 'EDIT_EXPENSE', id: '-1', updates };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const setState = [ expenses[0], expenses[2] ];
    const action = {type: 'SET_EXPENSES', expenses: setState };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(setState); 
});