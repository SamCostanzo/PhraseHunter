// to create a Game class with methods for starting and ending the game, handling interactions, getting random phrases, checking for a win, and removing a life counter.


// Create the game class

class Game {
    constructor() {
        missed: // Used to track the number of missed guesses
        phrases: // An array of phrases to use with the game (only letters and spaces)
    }

    // Methods

    // Randomly retrieves one of the phrases stored in the phrases array
    getRandomPhrase() {

    }

    // Checks to see if the button clicked by the player matches a letter in the phrase
    // If NOT-call the removeLife() method
    // If a letter matches-call the showMatchedLetter() method on the phrase and then call the checkForWin() method
    handleInteraction() {

    }

    // Removes a life, removes a heart from the board, and ends the game if the player is out of lives
    removeLife() {

    }

    // Checks to see if the player has selected all the letters
    checkForWin() {

    }

    // Displays a message if the player wins or a different message if they lose
    gameOver() {

    }

    // Calls the getRandomPhrase() method, and adds that phrase to the board by calling the phrase class addPhraseToDisplay() method
    startGame() {

    }
}