import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render Expense summary with a single expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={195} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Expense summary with a multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={114195} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with no expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={0} expensesTotal={0} />);
    expect(wrapper).toMatchSnapshot();
});