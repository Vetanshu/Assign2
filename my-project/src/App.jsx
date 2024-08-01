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
        <div className='bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 '>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center py-2 text-white">Ron Swanson Quotes</h1>
        <div className=' flex justify-center items-center h-[480px] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 '>
        <div className="flex justify-center">
          {quotes.length > 0 && <QuoteCard quotes={quotes} />}
        </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={fetchQuotes}
            className="bg-violet-800 hover:bg-violet-900 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Get New Quotes
          </button>
          <button
            onClick={toggleSavedQuotes}
            className="bg-rose-800 hover:bg-rose-950 text-white font-bold py-2 px-4 rounded"
          >
            {showSavedQuotes ? 'Hide Saved Quotes' : 'Show Saved Quotes'}
          </button>
        </div>
        {showSavedQuotes && <QuoteList />}
      </div>
      </div>
    </QuoteProvider>
  );
};

export default App;
