let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let button = document.querySelector('button');


const randomQuote = () => {
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    quote.textContent = data.content;
    author.textContent = `-${data.author}`
  })
}


button.addEventListener('click', randomQuote);