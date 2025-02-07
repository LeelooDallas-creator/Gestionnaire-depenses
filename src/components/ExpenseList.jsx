import React from 'react';
import ExpenseItem from './ExpenseItem';
import { useExpenseContext } from '../contexts/ExpenseContext';

const ExpenseList = () => {
  const { state } = useExpenseContext(); // Récupère l'état global des dépenses

  return (
    <div>
      <h3>Dépenses enregistrées</h3>
      {state.length === 0 ? (
        <p>Aucune dépense enregistrée.</p>
      ) : (
        state.map(expense => <ExpenseItem key={expense.id} expense={expense} />)
      )}
    </div>
  );
};

export default ExpenseList;
