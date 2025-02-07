import React from 'react';
import { useExpenseContext } from '../contexts/ExpenseContext';

const ExpenseItem = ({ expense }) => {
  const { dispatch } = useExpenseContext(); // Utilisation du dispatch pour supprimer une dépense

  const handleDelete = () => {
    dispatch({ type: 'DELETE_EXPENSE', payload: expense.id });
  };

  return (
    <div>
      <span>{expense.label} - {expense.amount}€</span> | <span>{expense.category}</span>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
};

export default ExpenseItem;
