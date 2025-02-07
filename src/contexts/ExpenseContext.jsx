import React, { createContext, useReducer, useContext } from 'react';
import { expenseReducer } from '../reducers/expenseReducer';

const ExpenseContext = createContext();

export const useExpenseContext = () => {
  return useContext(ExpenseContext);
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, []);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};
