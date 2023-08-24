//welcome message
console.log('..........Number Guessing Game..........\n');

//choose to play
const prompt = require('prompt');
prompt.start();
console.log('Do you want to play?')
console.log('Enter 1 to play or any other key to exit')
prompt.get("choice", function(err, result){
    
    let play = result.choice;
    console.log(play);
    
     
    //condition to play
    if (play == 1){
        //get username
        console.log()
        prompt.get("username", function(err, result){
            if (err) return;
            console.log(`Welcome ${result.username}!\nChoose a number from 1 to 10()\nGuess right, you WIN\nWrong, you loose`)
            console.log()
            //generate random number whole numbers from 1 to 10
            
        let playAgain;   
        do{
            let randomNumber = Math.floor(Math.random() * 10 ) + 1;
        
            //get user choice
            const prompt = require('prompt-sync')();
            const userInput = prompt('Guess: ')

            //checks if the user guessed right
            if (userInput == randomNumber){
                console.log('........Congratulations, YOU have WON........')
            }
            //checks if user input number out of range
            else if (userInput > 10 || result.input < 1){
                console.log('Please input a number between 1 and 10')
            }

            //check if the user guess wrong
            else if (userInput !== randomNumber){
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
        })
        
         
        }
});
