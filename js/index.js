const darkModeButton = document.getElementById("dark-mode-toggle");
let darkMode = false;

darkModeButton.addEventListener('click', () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

const quotes = {
  science: [
    { text: "Science is the key to our future, and if you don’t believe in science, then you’re holding everybody back.", author: "Bill Nye" },
    { text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", author: "Albert Einstein" },
    { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
    { text: "The universe is under no obligation to make sense to you.", author: "Neil deGrasse Tyson" },
    { text: "Everything is theoretically impossible, until it is done.", author: "Robert A. Heinlein" }
  ],
  motivation: [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
  ],
  inspiration: [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
  ],
  philosophy: [
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "To be, or not to be, that is the question.", author: "William Shakespeare" },
    { text: "The only thing I know is that I know nothing.", author: "Socrates" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" }
  ],
  life: [
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" }
  ]
};

let currentCategory = 'motivation';
let currentIndex = 0;

const quoteDisplay = document.getElementById('quotes');
const authorDisplay = document.getElementById('author'); // Make sure this ID exists in your HTML
const categorySelector = document.getElementById('category');
const prevButton = document.getElementById('previous-btn');
const nextButton = document.getElementById('next-btn');
const randomButton = document.getElementById('random-btn');
const reloadQuotesPage=document.getElementById(
"quotes_ganerator"
)

function displayQuote() {
  if (quotes[currentCategory]) {
    const currentQuote = quotes[currentCategory][currentIndex];
    quoteDisplay.textContent = currentQuote.text;
    authorDisplay.textContent = `– ${currentQuote.author}`;
  } else {
    quoteDisplay.textContent = 'No quotes available.';
    authorDisplay.textContent = '';
  }
}

categorySelector.addEventListener('change', function () {
  currentCategory = categorySelector.value;
  currentIndex = 0; 
  displayQuote(); 
});

randomButton.addEventListener('click', function () {
  currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
  displayQuote();
});

prevButton.addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex--;
    displayQuote();
  }
});

nextButton.addEventListener('click', function () {
  if (currentIndex < quotes[currentCategory].length - 1) {
    currentIndex++;
    displayQuote();
  }
});

function reloadPage(){
location.reload()

}
 reloadQuotesPage.addEventListener('click',reloadPage)
displayQuote();