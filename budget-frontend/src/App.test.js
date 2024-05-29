import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';

test('renders the title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Personal Budgeting Application/i);
  expect(linkElement).toBeInTheDocument();
});

test('fetches and displays incomes', async () => {
  render(<App />);
  await waitFor(() => {
    const incomeListHeading = screen.getByText(/Incomes/i);
    const list = within(incomeListHeading.parentElement).getByRole('list');

    // Find all elements with the text 'Salary' and '$5000'
    const salaryItems = within(list).getAllByText('Salary');
    const amountItems = within(list).getAllByText('$5000.00');

    // Assert that there is at least one element with the text 'Salary' and '$5000'
    expect(salaryItems.length).toBeGreaterThan(0);
    expect(amountItems.length).toBeGreaterThan(0);
  });
});

test('fetches and displays expenses', async () => {
  render(<App />);
  await waitFor(() => {
    const expenseListHeading = screen.getByText(/Expenses/i);
    const list = within(expenseListHeading.parentElement).getByRole('list');

    // Find all elements with the text 'Rent', '$1500', 'Utilities', and '$200'
    const rentItems = within(list).getAllByText('Rent');
    const rentAmountItems = within(list).getAllByText('$1500.00');
    const utilitiesItems = within(list).getAllByText('Utilities');
    const utilitiesAmountItems = within(list).getAllByText('$200.00');

    // Assert that there is at least one element with the text 'Rent' and '$1500'
    expect(rentItems.length).toBeGreaterThan(0);
    expect(rentAmountItems.length).toBeGreaterThan(0);

    // Assert that there is at least one element with the text 'Utilities' and '$200'
    expect(utilitiesItems.length).toBeGreaterThan(0);
    expect(utilitiesAmountItems.length).toBeGreaterThan(0);
  });
});
