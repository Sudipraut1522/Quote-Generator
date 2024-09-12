import { Quotes } from "../data/index.js";

let currentCategory = "motivation";
let currentIndex = 0;
let darkMode = false;

//Selectors
const quoteDisplay = document.getElementById("quotes");
const authorDisplay = document.getElementById("author");
const categorySelector = document.getElementById("category");
const prevButton = document.getElementById("previous-btn");
const nextButton = document.getElementById("next-btn");
const randomButton = document.getElementById("random-btn");
const reloadQuotesPage = document.getElementById("quotes_ganerator");
const darkModeButton = document.getElementById("dark-mode-toggle");
document.getElementById("increment").addEventListener("click", () => fontsize(1));
document.getElementById("decrement").addEventListener("click", () => fontsize(2));

//handle dark mode
darkModeButton.addEventListener("click", () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});
  

function displayQuote() {
  if (Quotes[currentCategory]) {
    const currentQuote = Quotes[currentCategory][currentIndex];
    quoteDisplay.textContent = currentQuote.text;
    authorDisplay.textContent = `– ${currentQuote.author}`;
  } else {
    quoteDisplay.textContent = "No quotes available.";
    authorDisplay.textContent = "";
  }
}


function fontsize(x){

  let font=window.getComputedStyle(document.getElementById("quotes")).fontSize;
  font=font.replace(/\D/g,'');
  font=Number(font);
  if(x==1){
    font=font+1;
    document.getElementById("quotes").style.fontSize=font+'px';

  }else{
    font=font-1;
    document.getElementById('quotes').style.fontSize=font+'px';
  }
} 
function reloadPage() {
  location.reload();
}
displayQuote();


// Events

reloadQuotesPage.addEventListener("click", reloadPage);

categorySelector.addEventListener("change", function () {
  currentCategory = categorySelector.value;
  currentIndex = 0;
  displayQuote();
});

randomButton.addEventListener("click", function () {
  currentIndex = Math.floor(Math.random() * Quotes[currentCategory].length);
  displayQuote();
});

prevButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    displayQuote();
  }
});

nextButton.addEventListener("click", function () {
  if (currentIndex < Quotes[currentCategory].length - 1) {
    currentIndex++;
    displayQuote();
  }
});




