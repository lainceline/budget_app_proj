import React from 'react';
import { render, screen, waitFor, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';

const mock = new MockAdapter(axios);

test('renders the title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Personal Budgeting Application/i);
  expect(linkElement).toBeInTheDocument();
});

test('fetches and displays incomes', async () => {
  mock.onGet('/api/incomes/').reply(200, [
    { id: 1, amount: 5000.00, description: 'Salary' }
  ]);

  render(<App />);
  const incomesLink = screen.getByText(/Incomes/i);
  fireEvent.click(incomesLink);

  await waitFor(() => {
    const incomeListHeading = screen.getByText(/Income List/i);
    const list = within(incomeListHeading.parentElement).getByRole('list');
    const { getByText } = within(list);
    expect(getByText(/Salary/i)).toHaveTextContent('Salary: $5000.00');
  });
});

test('fetches and displays expenses', async () => {
  mock.onGet('/api/expenses/').reply(200, [
    { id: 1, amount: 1500.00, description: 'Rent' },
    { id: 2, amount: 200.00, description: 'Utilities' }
  ]);

  render(<App />);
  const expensesLink = screen.getByText(/Expenses/i);
  fireEvent.click(expensesLink);

  await waitFor(() => {
    const expenseListHeading = screen.getByText(/Expense List/i);
    const list = within(expenseListHeading.parentElement).getByRole('list');
    const { getByText } = within(list);
    expect(getByText(/Rent/i)).toHaveTextContent('Rent: $1500.00');
    expect(getByText(/Utilities/i)).toHaveTextContent('Utilities: $200.00');
  });
});
