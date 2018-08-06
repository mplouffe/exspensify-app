import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage }  from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper, startRemoveExpense;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[0]}
            history={history}
            editExpense={editExpense}
            startRemoveExpense={startRemoveExpense}
        />
    );
});


test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startRemoveExpense).toHaveBeenCalledWith({ id: expenses[0].id });
});