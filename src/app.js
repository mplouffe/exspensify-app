import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, } from './actions/filters';
import getVisibleExpenses  from './selectors/expenses'

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', note: 'For last of March.', amount: 500 }));
store.dispatch(addExpense({ description: 'Gas Bill', note: 'For last of March.', amount: 600 }));
store.dispatch(setTextFilter('wateR'));
const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));
console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));