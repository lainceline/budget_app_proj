import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const Income = () => {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/incomes/`)
      .then(response => setIncomes(response.data))
      .catch(error => console.error("There was an error fetching the incomes!", error));
  }, []);

  return (
    <div className="income-section">
      <Typography variant="h4" gutterBottom>Incomes</Typography>
      <Paper elevation={3}>
        <List>
          {incomes.map(income => (
            <ListItem key={income.id}>
              <ListItemText primary={income.name} secondary={`$${Number(income.amount).toFixed(2)}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default Income;
