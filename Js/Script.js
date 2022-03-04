// const QUOTEBANK= [
//     {
//         quote: "For those of us who have shared thesame pain they can be no hate",
//         author: "'Gaara'"
//     },
//     {
//         quote: "Those who do not understand true pain can never understand true peace",
//         author: "'Pain'"
//     },
//     {
//         quote: "Wake up to reality nothing goes as planned in this accursed world, the longer you live the more you realise that the only things that exist in this reality are merely pain, suffering and futility",
//         author: "'madara Uchicha'"
//     },
//     {
//         quote: "Growth occurs when one goes beyond one's limits. Realizing that it is also part of the training",
//         author: "'Itachi Uchiha'"
//     },
// ]

window.onload= init;
        function init() {
          generateQuote() 
        }
        function generateQuote(){
            let quoteSize = QUOTEBANK.length;
            let randomIndex = Math.floor(Math.random()* quoteSize);
            let randomQuoteData = QUOTEBANK[randomIndex];

            let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="
            // adding quote
            let quoteInApiFormat = randomQuoteData.quote.replace(/ /g,"%20");

            twitterLink += quoteInApiFormat;
            //adding autho
            let authoInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
            twitterLink += " - " + authoInApiFormat;

            document.getElementById("tweet-quote").href = twitterLink;
            document.getElementById("text").innerText = randomQuoteData.quote;
            document.getElementById("author").innerText = randomQuoteData.author;
        };