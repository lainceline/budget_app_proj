import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Income from './components/Income';
import Expense from './components/Expense';

function App() {
  return (
    <Router>
      <div>
        <h1>Personal Budgeting Application</h1>
        <Switch>
          <Route path="/incomes" component={Income} />
          <Route path="/expenses" component={Expense} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
