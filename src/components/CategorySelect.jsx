import React, { useReducer } from 'react';

// Définition des catégories
const categories = [
  'Alimentation',
  'Logement',
  'Transport',
  'Divertissement',
  'Santé',
  'Éducation',
  'Autres'
];

// Définir le reducer pour gérer l'état de la catégorie sélectionnée
const categoryReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return action.payload;
    default:
      return state;
  }
};

const CategorySelect = ({ setCategory }) => {
  const [category, dispatch] = useReducer(categoryReducer, '');

  // Fonction pour mettre à jour la catégorie
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    dispatch({ type: 'SET_CATEGORY', payload: selectedCategory });
    setCategory(selectedCategory); // Passer la catégorie au parent si nécessaire
  };

  return (
    <div>
      <label htmlFor="category">Choisir une catégorie :</label>
      <select
        id="category"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="">Sélectionner une catégorie</option>
        {categories.map((categoryName) => (
          <option key={categoryName} value={categoryName}>
            {categoryName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
