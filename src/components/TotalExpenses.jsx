import React from 'react';
import { useExpenseContext } from '../contexts/ExpenseContext';

const TotalExpenses = () => {
  const { state } = useExpenseContext();

  const total = state.reduce((acc, expense) => acc + expense.amount, 0);

  const categoryTotals = state.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div>
      <h3>Total des Dépenses: {total}€</h3>
      <h4>Par Catégorie :</h4>
      <ul>
        {Object.entries(categoryTotals).map(([category, total]) => (
          <li key={category}>{category}: {total}€</li>
        ))}
      </ul>
    </div>
  );
};

export default TotalExpenses;
