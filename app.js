var quotes = [
  "Don't cry because it's over, smile because it happend. Dr. Seuss", 
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. ― Marilyn Monroe", 
  "Be yourself; everyone else is already taken.― Oscar Wilde",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ― Albert Einstein",
  "So many books, so little time. ― Frank Zappa", 
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ― Bernard M. Baruch",
  "A room without books is like a body without a soul. ― Marcus Tullius Cicero"
]



   
function newQuote() {
  var randNum = Math.floor(Math.random() * (quotes.length))
  document.getElementById('quoteDisplay').innerHTML = quotes[randNum]
}