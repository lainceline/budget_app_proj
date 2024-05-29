import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Expense() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/expenses/`)
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the expenses!', error);
      });
  }, []);

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>{expense.name}: ${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default Expense;
