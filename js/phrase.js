class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        // this.phrase = game.getRandomPhrase();
    }


        addPhraseToDisplay(){
            // const li = document.createElement("li");
            const phraseDiv = document.getElementById("phrase");
            const ul = phraseDiv.querySelector("ul");

            // const splitArray = this.phrase.split("");
            // const appendToDiv = phraseDiv.appendChild(ul);

            for(let i = 0; i < this.phrase.length; i++){
                const li = document.createElement("li");
                if(this.phrase[i].match(/\s/)){
                    li.className = 'hide space';
                } else if(this.phrase[i].match(/[a-z]/)){
                    li.className = 'hide letter ' + this.phrase[i];
                    li.innerHTML = this.phrase[i];
                }

                    ul.appendChild(li);
            }
        }

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/    checkLetter(){
        let choice = event.target.innerText;
        for(let letter of this.phrase){
            if (choice === letter){
                return true;
            }
        }
                return false;
    }

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(){
        const letter = document.getElementById('phrase').firstElementChild.children;
        let guess = event.target.innerText;

        for(let i = 0; i < letter.length; i++){
            let check = letter[i].innerText;
            if(guess === check){
                letter[i].className = 'show';
            }
        }
    }




}






















































