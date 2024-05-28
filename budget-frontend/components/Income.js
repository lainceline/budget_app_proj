import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Income() {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    axios.get('/api/incomes/')
      .then(response => {
        setIncomes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the incomes!', error);
      });
  }, []);

  return (
    <div>
      <h2>Income List</h2>
      <ul>
        {incomes.map(income => (
          <li key={income.id}>{income.description}: ${income.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default Income;
