class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        // this.phrase = game.getRandomPhrase();
    }

    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            this.phrase[i].split('');
            const li = document.createElement('li');
            li.textContent = this.phrase[i];

            if (this.phrase[i] === ' ') {
                li.className = `space`;
            } else {
                li.className = `hide letter ${this.phrase[i]}`;
            }
            const phraseDiv = document.getElementById('phrase');
            const phraseUl = phraseDiv.querySelector("ul");
            phraseUl.appendChild(li);
            }
        }   
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/    
    checkLetter(letter){
        let phraseLetters = this.phrase.split('');
        let matchLetters = phraseLetters.filter(letter => letter !== ' ');

        if (matchLetters.includes(letter)) {
            return true;
        } else { 
            return false;
        } 
    }
/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
      const ul = document.querySelector('ul');
      const li = ul.querySelectorAll('li');

        for (let i = 0; i < li.length; i++) {
            if (letter === li[i].textContent) {
                li[i].className = 'show';
            } 
        }
    }
}






















































