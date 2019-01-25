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
*/    checkLetter(letter) {
        if (this.phrase.includes(letter)){
            return true;
        } else {
            return false;
        }
    }

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter){
        const x = document.getElementById('phrase').firstElementChild.children;
        // let guess = event.target.innerText;
        let guess = letter;

        for(let i = 0; i < x.length; i++){
            let check = x[i].innerText;
            if(guess === check){
                x[i].className = 'show';
            }
        }
    }




}






















































