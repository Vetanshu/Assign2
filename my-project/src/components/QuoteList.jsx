import React, { useContext } from 'react';
import { QuoteContext } from '../context/QuoteContext';

const QuoteList = () => {
  const { quotes, dispatch } = useContext(QuoteContext);

  const deleteQuote = (index) => {
    dispatch({ type: 'DELETE_QUOTE', payload: index });
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Saved Quotes</h2>
      <div className="flex flex-wrap">
        {quotes.map((quote, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-2 bg-purple-700">
            <p className="text-white text-base">{quote}</p>
            <button
              onClick={() => deleteQuote(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteList;
