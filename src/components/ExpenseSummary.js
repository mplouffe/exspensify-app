import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
    <div>
        {props.expenses.length === 1 ? (
            <p>Viewing 1 expense totalling {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}</p>
        ) : (
            <p>Viewing {props.expenses.length} expenses totalling {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}</p>
        )}
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseSummary);