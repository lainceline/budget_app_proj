import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import Income from './components/Income';
import Expense from './components/Expense';
import './App.css'; // Import your CSS file here

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Budget App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Income />
        <Expense />
      </Container>
    </div>
  );
};

export default App;
