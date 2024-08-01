import React, { useContext } from 'react';
import { QuoteContext } from '../context/QuoteContext';

const QuoteCard = ({ quotes }) => {
  const { dispatch } = useContext(QuoteContext);

  const saveQuote = (quote) => {
    dispatch({ type: 'ADD_QUOTE', payload: quote });
  };

  return (
    <div className="flex flex-wrap justify-center ">
      {quotes.map((quote, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-2 bg-[#2E1065]">
          <p className="text-white text-base">{quote}</p>
          <button
            onClick={() => saveQuote(quote)}
            className="bg-gradient-to-t from-blue-600 via-violet-700 to-fuchsia-800 hover:bg-gradient-to-b from-blue-600 via-violet-700 to-fuchsia-800 text-white font-bold py-2 px-4 rounded mt-4 transition-all ease-in-out hover:scale-105"
          >
            Save to List
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuoteCard;
