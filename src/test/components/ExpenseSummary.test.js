import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render Expense summary with a single expense', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[ expenses[0] ]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Expense summary with a multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with no expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});