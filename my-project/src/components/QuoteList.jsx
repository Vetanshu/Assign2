import React, { useContext } from 'react';
import { QuoteContext } from '../context/QuoteContext';

const QuoteList = ({ toggleSavedQuotes }) => {
  const { quotes, dispatch } = useContext(QuoteContext);

  const deleteQuote = (index) => {
    dispatch({ type: 'DELETE_QUOTE', payload: index });
  };

  return (
    <div className="xl:mt-5 xl:ml-12 mr-4 mt-4 absolute top-2 bg-gradient-to-br from-violet-700 via-purple-800 to-indigo-900 w-[290px] sm:w-[600px] sm:mt-8 sm:ml-1 xl:w-10/12 h-[500px] xl:h-[660px] shadow-2xl rounded-2xl px-2 xl:px-10 overflow-scroll md:mx-20 md:h-[600px] md:w-4/5">
      <button
        onClick={toggleSavedQuotes}
        className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold sm:py-2 sm:px-4 rounded-full text-sm sm:text-lg  px-3  py-2"
      >
        x
      </button>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center xl:text-4xl text-white mt-8">Saved Quotes</h2>
      <div className="flex flex-wrap justify-center">
        {quotes.map((quote, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/5 p-2">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-purple-700">
              <p className="text-white text-sm">{quote}</p>
              <button
                onClick={() => deleteQuote(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-3 text-sm sm:font-bold sm:py-2 sm:px-4 rounded mt-4"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteList;
