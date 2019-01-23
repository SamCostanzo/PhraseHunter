

const startGameButton = document.getElementById("btn__reset");
const game = new Game();
    
    startGameButton.addEventListener('click', () => {
        resetDisplay();
        game.startGame();
    });


document.getElementById('qwerty').addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        markButton(event);
    }
});



console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);




function resetDisplay(){
    document.getElementById('overlay').style.display = 'none';
}


// function markButton(event){
//     game.handleInteraction(event)
//     event.target.disabled = true;
// }

































    // const overLayDiv = document.getElementById("overlay");
    // overLayDiv.style.display = "none";
    // this.getRandomPhrase().addPhraseToDisplay();




// // perform basic DOM selection, add event handlers, and to reset the game when it ends


// // This file creats a new instance of the Game class, adds event listeners for the onscreen keyboard and a function to display the game


// // const phrase = new Phrase();
// // const game = new Game();

// // console.log(phrase);
// // console.log(game);

// // const phrase = new Phrase("Life is like a box of chocolates");
// // console.log(`Phrase - phrase: ${phrase.phrase}`);

// // const game = new Game();

// // game.phrases.forEach((phrase, index) => {
// // console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// // });


// // var randomTest = game.phrases[Math.floor(Math.random() * game.phrases.length)];

// // const logPhrase = (phrase) => {
// //     // console.log(`Phrase - phrase: `, phrase.phrase);
// //     };
// //     const game = new Game();
// //     logPhrase(game.getRandomPhrase());
// //     logPhrase(game.getRandomPhrase());
// //     logPhrase(game.getRandomPhrase());
// //     logPhrase(game.getRandomPhrase());
// //     logPhrase(game.getRandomPhrase());


// // // const game = new Game();
// // game.getRandomPhrase().addPhraseToDisplay();

// // var str = "How are you doing today?";
// // var res = str.split(""); // <--- THIS using the .split() method on a string (in this case a phrase) and passing in "" as an argument splits the string into an array of its letters and spaces
// // console.log(str);
// // console.log(res);
// console.log(game.getRandomPhrase());
// console.log("app");








// const phrase = new Phrase();
// const game = new Game();



// const phrase = new Phrase('LIFE is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);



// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });






// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());


// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const startGameButton = document.getElementById("btn__reset");
//         startGameButton.addEventListener('click', () => {
//             const overLayDiv = document.getElementById("overlay");
//             overLayDiv.style.display = "none";
//         });

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);