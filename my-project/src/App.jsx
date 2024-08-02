import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QuoteProvider } from './context/QuoteContext';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [showSavedQuotes, setShowSavedQuotes] = useState(false);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes/5');
      setQuotes(response.data);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const toggleSavedQuotes = () => {
    setShowSavedQuotes(!showSavedQuotes);
  };

  return (
    <QuoteProvider>
      <div className='bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 h-full xl:h-screen relative'>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-center py-4 xl:text-4xl sm:text-3xl text-white">Ron Swanson Quotes</h1>
          <div className="flex justify-center bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 xl:h-[600px] p-8">
            {quotes.length > 0 && <QuoteCard quotes={quotes} />}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={fetchQuotes}
              className="bg-violet-700 hover:bg-violet-800 text-white font-semibold p-2 text-sm rounded mr-4 xl:p-6 xl:text-xl sm:font-bold sm:p-3 sm:text-base"
            >
              Get New Quotes
            </button>
            <button
              onClick={toggleSavedQuotes}
              className="bg-fuchsia-600 hover:bg-fuchsia-800 text-white font-semibold sm:font-bold p-2 px-3 text-sm rounded-lg xl:p-6 xl:text-xl sm:text-base"
            >
              {showSavedQuotes ? 'Hide Saved Quotes' : 'Show Saved Quotes'}
            </button>
          </div>
          {showSavedQuotes && <QuoteList toggleSavedQuotes={toggleSavedQuotes} />}
        </div>
      </div>
    </QuoteProvider>
  );
};

export default App;
