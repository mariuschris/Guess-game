//welcome message
console.log('..........Number Guessing Game..........\n');

//choose to play
const prompt = require('prompt-sync')();
console.log('Do you want to play?')
const play = prompt('Enter 1 to play or any other key to exit: ')
    //condition to play
    if (play == 1){
        //get username
        console.log()
        const username = prompt('username: ')
        console.log(`Welcome ${username}!\nChoose a number from 1 to 10()\nGuess right, you WIN\nWrong, you loose`)
        console.log()
        
        let playAgain;
        do{
            //generate random number whole numbers from 1 to 10
            let randomNumber = Math.floor(Math.random() * 10 ) + 1;
        
            //get user choice
            const userInput = prompt('Guess: ')

            //checks if the user guessed right
            if (userInput == randomNumber){
                console.log('........Congratulations, YOU have WON........')
            }
            //checks if user input number out of range
            else if (userInput > 10 || userInput < 1){
                console.log('Please input a number between 1 and 10')
            }

            //check if the user guess wrong
            else {
            console.log('.......Ouch! Wrong Guess, You have Lost.........')
            }

            //Check if the user wants to play again of quit
            const  chk = prompt('Enter 1 to play or any other key to exit: ')
            if (chk == 1) {
            playAgain = true;
            } else playAgain = false;
        }
       //loop that restart the game
        while (playAgain == true)
        
        console.log('................Goodbye................')
         
        }

e