import React from 'react';

export default function QuoteBox({ quote, handleNewQuote }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-8 max-w-md mx-auto bg-white shadow-md rounded-md">
        <section>
          <h3 className="my-8 text-start">
            <p className="text-2xl font-bold">
              <span className="text-gray-500">&ldquo;</span>
              {quote?.text}
              <span className="text-gray-500">&rdquo;</span>
            </p>
          </h3>
          <h2 className="mb-8 text-end">-{quote?.author}</h2>
        </section>
        <div className="flex flex-wrap justify-around items-center">
          <button
            onClick={handleNewQuote}
            className="w-full md:w-auto px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none mb-4 md:mb-0"
          >
            New
          </button>
          <a
            href="https://twitter.com/intent/tweet"
            target="blank"
            className="w-full md:w-auto px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none mb-4 md:mb-0"
          >
            Tweet
          </a>
        </div>
      </div>
    </main>
  );
}
