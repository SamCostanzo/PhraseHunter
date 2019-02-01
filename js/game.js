class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase();
    }


    createPhrases(){
        const phrases = [new Phrase("Go Cubs Go"),
                        new Phrase("New York Giants"),
                        new Phrase("Not all who wander are lost"),
                        new Phrase("Alexander Hamilton"),
                        new Phrase("Here comes the sun")];
                
                return phrases;
        }

    /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

   
/**
    * Begins game by selecting a random phrase and displaying it to user
*/
    startGame(){
            document.getElementById("overlay").style.display = "none";
            this.activePhrase = this.getRandomPhrase();
            this.activePhrase.addPhraseToDisplay();
            this.resetGame();
   }

/**
    * HandleInteraction has several supporting methods that all check for different interactions when a letter is chosen
*/

        handleInteraction(button) {
            if (button.tagName == 'BUTTON') { //event only listen to `BUTTON` elements on click
     
                let letter = button.textContent
                button.disabled = true;
                
                if (!game.activePhrase.checkLetter(letter)) {
                    button.className = 'wrong';
                    this.removeLife();
                } else {
                    button.className = 'chosen';
                    game.activePhrase.showMatchedLetter(letter);
                    this.checkForWin();     
                }
            } 
     
            if (this.checkForWin() == true) { //check if the user has won
                this.gameOver(true); //call the gamewon is equal to true
            } 
            
                console.log(button);
        }
   


/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
        const hiddenLetters = document.getElementsByClassName('hide').length;
        if (!hiddenLetters) {
            return true;
        } else {
            return false;
        }
    }


/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
   removeLife(){
       const img = document.querySelectorAll('img');

       this.missed += 1;

       if(this.missed === 5){
            this.gameOver('lose');
       } else {
           for(let i = 0; i < this.missed; i++){
                img[i].src = "images/lostHeart.png";
           }
       }
   }


  /**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon){
        document.getElementById('overlay').style.display = 'flex';
        if(gameWon === true){
            document.getElementById('game-over-message').innerText = 'You won!';
            document.getElementById('overlay').className = 'win';
            document.getElementById("btn__reset").textContent = "Play again";
        } else {
            document.getElementById('game-over-message').innerText = 'You lost. Better luck next time!';
            document.getElementById('overlay').className = 'lose';
            document.getElementById("btn__reset").textContent = "Try again";
        }
    }

    // Resets the game after a win or lose
    resetGame() {
        const ul = document.querySelector('ul');
        const li = ul.querySelectorAll('li');
        const qwertyDiv = document.getElementById('qwerty');
        const buttons = qwertyDiv.querySelectorAll('button');
        const img = document.querySelectorAll('img');
 
        for (let i = 0; i < li.length; i++) {
            li[i].remove();       
        }
        
            this.activePhrase = this.getRandomPhrase();
            this.activePhrase.addPhraseToDisplay();

            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
                buttons[i].className = 'key';
        }

            img.forEach(image => image.src = 'images/liveHeart.png'); 
        }
    }









