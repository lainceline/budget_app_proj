// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Income from './components/Income';
import Expense from './components/Expense';

function App() {
  return (
    <Router>
      <div>
        <h1>Personal Budgeting Application</h1>
        <nav>
          <ul>
            <li><Link to="/incomes">Incomes</Link></li>
            <li><Link to="/expenses">Expenses</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/incomes" component={Income} />
          <Route path="/expenses" component={Expense} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
