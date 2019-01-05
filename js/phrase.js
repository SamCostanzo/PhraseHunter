// to create a Phrase class to handle the creation of phrases


class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();     // Set to the 'phrase' parameter, then converted To lower case
    }

    
    // Display a phrase on the game board
    addPhraseToDisplay(){
        // let chosenPhrase = getRandomPhrase();
        
        for (let i = 0; i < phrase1.length; i++){
            
            const li = document.createElement("li");
            const phraseDiv = document.getElementById("phrase");
            
            
            li.appendChild(phraseDiv);

            phraseDiv.appendChild(li);
        }
    }
}


// Loop over the current phrase - use var randomPhrase from game file

// for every letter and space in the phrase, create an li element and append it to the ul of the phrase Div  

// Be mindful of which classes add to what

// Each letter starts out with a hide class, a letter class and then a class for the actual letter in the li.  

// Each space needs a space class

