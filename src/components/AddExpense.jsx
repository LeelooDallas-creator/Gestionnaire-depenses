import React, { useState } from 'react';
import CategorySelect from './CategorySelect';

const AddExpense = () => {
  const [amount, setAmount] = useState('');
  const [label, setLabel] = useState('');
  const [category, setCategory] = useState('');

  const handleAddExpense = () => {
    const newExpense = {
      id: Date.now(),
      amount,
      label,
      category,
    };

    // Ajouter la dépense ici (par exemple avec dispatch si tu utilises useReducer)
    console.log(newExpense);

    // Réinitialiser les champs
    setAmount('');
    setLabel('');
    setCategory('');
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Montant"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <CategorySelect setCategory={setCategory} />
      <button onClick={handleAddExpense}>Ajouter</button>
    </div>
  );
};

export default AddExpense;
