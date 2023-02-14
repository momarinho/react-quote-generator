import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';

export default function GetQuote() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://type.fit/api/quotes');
      const json = await response.json();

      setQuotes(json);
      setQuote(json[0]);
    };
    fetchData();
  }, []);

  function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  const handleNewQuote = () => {
    setQuote(getRandomQuote(quotes));
  };

  return (
    <div>
      <QuoteBox handleNewQuote={handleNewQuote} quote={quote} />
    </div>
  );
}
