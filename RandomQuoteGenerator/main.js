var quotes = [
  "Don't cry because it's over, smile because it happened. ― Dr. Seuss",
  'You only live once, but if you do it right, once is enough.” ― Mae West',
  "“In three words I can sum up everything I've learned about life: it goes on.” ― Robert Frost",
  ' “To live is the rarest thing in the world. Most people exist, that is all.”― Oscar Wilde',
  '“It does not do to dwell on dreams and forget to live.” ― J.K. Rowling',
  '“Good friends, good books, and a sleepy conscience: this is the ideal life.” ― Mark Twain',
  '“Reality continues to ruin my life.” ― Bill Watterson, The Complete Calvin and Hobbes',
  "“Things change. And friends leave. Life doesn't stop for anybody.” ― Stephen Chbosky",
  '“The only way out of the labyrinth of suffering is to forgive.”― John Green, Looking for Alaska',
  '“But better to get hurt by the truth than comforted with a lie.” ― Khaled Hosseini']

var generate = document.querySelector('#quote')
var randomQuote
var quoteBox = document.querySelector('#quote1')
var tweet = document.querySelector('#tweet')

function generateQuote () {
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  quoteBox.innerHTML = `<p>${randomQuote}</p>`
  console.log(randomQuote)
}

function tweetQuote () {
  window.open('https://twitter.com/intent/tweet?text=' + randomQuote)
}

generate.addEventListener('click', generateQuote)
tweet.addEventListener('click', tweetQuote)
