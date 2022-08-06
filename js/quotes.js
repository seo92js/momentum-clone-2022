const quotes = [
  {
    quote: "When they go low, we go high.",
    author: "Michelle Obama",
  },
  {
    quote: "I was never less alone than when by myself.",
    author: "Edward Gibbon",
  },
  {
    quote: "A friend is a second myself.",
    author: "Aristotles",
  },
  {
    quote: "The die is cast.",
    author: "- Julius Caesar",
  },
  {
    quote: "No pain, No gain.",
    author: "- Benjamin Franklin",
  },
  {
    quote: "Don't dream, Be it.",
    author: "- Tim curry",
  },
  {
    quote: "Life is a journey.",
    author: "- Ralph Waldo Emerson",
  },
  {
    quote: "Where there is a will there is a way.",
    author: "- Angela Merkel",
  },
  {
    quote: "Every horse thinks its own pack heaviest.",
    author: "- Thomas Fuller",
  },
  {
    quote: "Necessity is the mother of taking chances.",
    author: "- Mark Twain",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
