import React from 'react';

export default function QuoteBox({ quote, handleNewQuote }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-8 max-w-md mx-auto bg-white shadow-md rounded-md">
        <section>
          <h3 className="my-8 text-2xl font-bold">
            <span className="text-gray-500">&ldquo;</span>
            {quote?.text}
            <span className="text-gray-500">&rdquo;</span>
          </h3>
          <h2 className="font-medium">{quote?.author}</h2>
        </section>
        <section className="flex justify-around items-center mt-8">
          <button
            onClick={handleNewQuote}
            className="px-4 py-2 mt-8 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
          >
            New Quote
          </button>
          <button
            href="https://twitter.com/intent/tweet"
            target="blank"
            className="px-4 py-2 mt-8 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Tweet
          </button>
        </section>
      </div>
    </main>
  );
}
