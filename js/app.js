// perform basic DOM selection, add event handlers, and to reset the game when it ends


// This file creats a new instance of the Game class, adds event listeners for the onscreen keyboard and a function to display the game



// Function to hide the start screen overaly
resetDisplay();




// Function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class
markButton();




// Add an event listener to the "start game" button which calls the resetDisplay() function, creates a new Game object, and starts the game





// Add event listeners to each of the keyboard buttons, so that clicking a button calls the  markButton() function