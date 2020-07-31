'use strict';

const quotes = [
  {
    quoteText: 'Don\'t ask what the world needs. Ask what makes you come alive and go do it. Because what the world needs is people who have come alive',
    quoteAuthor: 'Howard Thurman',
    source: '',
    tags: ['passion'],
  } 
]

function get() {
  return {
    quote: 'Imagination is the only weapon in the war against reality',
    author: 'Jules de Gaultier',
    source: 'https://www.goodreads.com/quotes/128249-imagination-is-the-only-weapon-in-the-war-against-reality'
  };
}

module.exports = {
  get,
};
