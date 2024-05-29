import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const Expense = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/expenses/`)
      .then(response => setExpenses(response.data))
      .catch(error => console.error("There was an error fetching the expenses!", error));
  }, []);

  return (
    <div className="expense-section">
      <Typography variant="h4" gutterBottom>Expenses</Typography>
      <Paper elevation={3}>
        <List>
          {expenses.map(expense => (
            <ListItem key={expense.id}>
              <ListItemText primary={expense.name} secondary={`$${Number(expense.amount).toFixed(2)}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default Expense;
