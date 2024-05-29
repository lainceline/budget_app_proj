import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the base URL for axios
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

// Set up axios mock adapter
const mock = new MockAdapter(axios);

// Mock API endpoints
mock.onGet('/incomes/').reply(200, [
  { id: 1, amount: 5000.00, name: 'Salary' }
]);

mock.onGet('/expenses/').reply(200, [
  { id: 1, amount: 1500.00, name: 'Rent' },
  { id: 2, amount: 200.00, name: 'Utilities' }
]);
