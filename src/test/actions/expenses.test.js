import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense({id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const update = {note: 'Test note update'};
    const id = 'testid'
    const action = editExpense(id, update);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: id,
        updates: update
    });
});

test('should return add expense action object with the passed in values', () => {
    const expense = {
        description: 'test description',
        note: 'test note',
        amount: 100,
        createdAt: 100
    };
    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});

test('should set up the add expense action object with the default values', () => {
    const defaultValues = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultValues,
            id: expect.any(String)
        }
    })
});