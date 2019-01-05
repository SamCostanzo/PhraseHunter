
class Game {
    constructor(){
        this.missed = 0;                                                      // Track the number of missed guesses. Starts at 0 since no guesses have been made at start of game
        this.phrases = [phrase1, phrase2, phrase3, phrase4, phrase5];        // An array of phrases to use with the game. CreatePhrases() returns an array of phrases defined in the method below
        this.activePhrase = null;                                           // This is the phrase object that's currently in play. Starts at null
    }


    // Select and return a random phrase from the array of phrases stored in the game classes 'phrases' property
    getRandomPhrase(){                           
        let randomPhrase = game.phrases[Math.floor(Math.random() * game.phrases.length)];
        return randomPhrase;
    }
    
}




// New Phrase objects stored in variables and put in the this.phrases property above.
let phrase1 = new Phrase("Life is like a box of chocolates");
let phrase2 = new Phrase("Go cubs go");
let phrase3 = new Phrase("The new york giants");
let phrase4 = new Phrase("I got egg on my crocks");
let phrase5 = new Phrase("Praise the sun");




