import React from 'react';
import { ExpenseProvider } from './contexts/ExpenseContext';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import TotalExpenses from './components/TotalExpenses';

function App() {
  return (
    <ExpenseProvider>
      <div>
        <h1>Gestionnaire de Dépenses</h1>
        <AddExpense />
        <ExpenseList />
        <TotalExpenses />
      </div>
    </ExpenseProvider>
  );
}

export default App;
