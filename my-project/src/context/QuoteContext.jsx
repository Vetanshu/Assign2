import React, { createContext, useReducer } from 'react';

const QuoteContext = createContext();

const quoteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.payload];
    case 'DELETE_QUOTE':
      return state.filter((quote, index) => index !== action.payload);
    default:
      return state;
  }
};

const QuoteProvider = ({ children }) => {
  const [quotes, dispatch] = useReducer(quoteReducer, []);

  return (
    <QuoteContext.Provider value={{ quotes, dispatch }}>
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteContext, QuoteProvider };
