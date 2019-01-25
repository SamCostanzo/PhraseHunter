class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Go Cubs Go"),
            new Phrase("New York Giants"),
            new Phrase("Not all who wander are lost"),
            new Phrase("Thats the way the cookie crumbles"),
            new Phrase("Here comes the sun")
            ];
        this.activePhrase = this.getRandomPhrase();
    }

    /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase(){
        Math.floor(Math.random() * 5);
        let randomPhrase = this.phrases[(Math.floor(Math.random() * this.phrases.length))];
                
        return randomPhrase;
    }

   
/**
    * Begins game by selecting a random phrase and displaying it to user
*/
    startGame(){
            const overLayDiv = document.getElementById("overlay");
            overLayDiv.style.display = "none";
            this.getRandomPhrase().addPhraseToDisplay();
   }

/**
    * HandleInteraction has several supporting methods that all check for different interactions when a letter is chosen
*/

   handleInteraction(){
       if(game.activePhrase.checkLetter(event)){
            event.target.className =  'chosen';
            this.phrase.showMatchedLetter(event);
            this.checkForWin();
       } else {
            event.target.className = 'wrong';
            this.removeLife();
       }
   }


/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
   checkForWin(){
    // Letter selects all children (aka each letter of the phrase)   
    const letter = document.getElementById('phrase').firstElementChild.children;
    let correct = 0;

       for(let i = 0; i < letter.length; i++){
            if(letter[i].className === 'show'){
                correct += 0;
            }
            else if(letter[i].className === 'hide space'){
                correct += 0;
                // console.log(correct);
            }
            else {
                correct -= 1;
                // console.log(correct);
            }
       }

            if(correct === 0){
                // console.log(correct);
                this.gameOver('win');
            }   
   }

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
   removeLife(){
    //    const tries = document.getElementsByClassName('tries');
       const lives = document.querySelectorAll('img');

       this.missed += 1;

       if(this.missed === 5){
            this.gameOver('lose');
       } else {
           for(let i = 0; i < this.missed; i++){
                lives[i].src = "images/lostHeart.png";
           }
       }
   }


  /**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon){

        document.getElementById('overlay').style.display = 'flex';
        if(gameWon === 'win'){
            document.getElementById('game-over-message').innerText = 'You won! Refresh the page to play again :)';
            document.getElementById('overlay').className = 'win';
            startGameButton.style.display = 'none';
        } else {
            document.getElementById('game-over-message').innerText = 'You lost. Refresh the page to try again';
            document.getElementById('overlay').className = 'lose';
            startGameButton.style.display = 'none';
        }
    }

}









