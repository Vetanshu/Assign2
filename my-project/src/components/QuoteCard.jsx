import React, { useContext } from 'react';
import { QuoteContext } from '../context/QuoteContext';

const QuoteCard = ({ quotes }) => {
  const { dispatch } = useContext(QuoteContext);

  const saveQuote = (quote) => {
    dispatch({ type: 'ADD_QUOTE', payload: quote });
  };

  return (
    <div className="flex flex-wrap justify-center">
      {quotes.slice(0, 5).map((quote, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/5 p-2">
          <div className="max-w-sm rounded overflow-hidden shadow-lg xl:p-10 p-4 bg-violet-800">
            <p className="text-white text-sm  sm:text-base xl:text-lg">{quote}</p>
            <button
              onClick={() => saveQuote(quote)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 xl:py-2 xl:px-4 rounded mt-4 text-xs sm:text-base xl:text-lg"
            >
              Save to List
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuoteCard;
