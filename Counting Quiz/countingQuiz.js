const start = document.getElementById('start');
const questionDots = document.getElementById('qdot');

let numberPool = [];
let guessPool = [];
let failLimit, goalLimit, cLimit;

//The numLimit function is to determine how many correct guesses need to be made to win.  The game will enter a fail state and reset if 2 more wrong answers than the number of correct answers are tallied.
const numLimit = () =>{
    numberPool = [];
    guessPool = [];
    let numQuestions= Number(window.prompt("How many numbers would you like to count?  Please choose a number between 3 and 10.", 3));

    if(numQuestions < 3){
        alert("Let's try to count at least 3 times.");
        numQuestions = 3;
        failLimit = numQuestions + 2;
        let upperLimit = Number(window.prompt("What's the highest number you would like to count to?", 20));
        //Added if/else statement to account for user setting a count limit too low for the game to function.  In these events it will default to 20.
            if(upperLimit < failLimit){
                alert("That's too low for the game to work, we'll go no higher than 20.");
                cLimit = 20;
            }else{
                cLimit = upperLimit;
            }
            for(i = 0; i < cLimit; i++){
                numberPool.push(i);
            }
    }else if(numQuestions > 10){
        alert("I see you would like a challenge, but let's limit it to 10 times.");
        numQuestions = 10;
        failLimit = numQuestions + 2;
        let upperLimit = Number(window.prompt("What's the highest number you would like to count to?", 20));
        if(upperLimit < failLimit){
            alert("That's too low for the game to work, we'll go no higher than 20.");
            cLimit = 20;
        }else{
            cLimit = upperLimit;
        }
        for(i = 0; i < cLimit; i++){
            numberPool.push(i);
        }
    }else{
        failLimit = numQuestions + 2;
        let upperLimit = Number(window.prompt("What's the highest number you would like to count to?", 20));
        if(upperLimit < failLimit){
            alert("That's too low for the game to work, we'll go no higher than 20.");
            cLimit = 20;
        }else{
            cLimit = upperLimit;
        }
        for(i = 0; i < cLimit; i++){
            numberPool.push(i);
        }
    }
    guessPool = numberPool;

    console.log(numQuestions);
    console.log(numberPool);
    console.log(guessPool);
    countingNumber();
    //Will need to add a trigger to have the game load another function to start the game
}

let countingNumber = ()=>{
    //Current stoping point as of 5/15. This function will generate the number and the guesses (2 wrong and 1 right guess) for what comes after the generated number
    let numberSelect = Math.floor(Math.random() * (numberPool.length - 1));  //Generates a valid index number to select from numberPool
    let currentNumber = numberPool[numberSelect];
    
    document.getElementById('promptPort').innerHTML = currentNumber;

    let generateDots = () =>{
        document.getElementById('qdot').innerHTML = "";
        let newDot = document.createElement('div');
        newDot.setAttribute('class','dot');
    
        for(i = 0; i < currentNumber; i++){
            questionDots.appendChild(newDot.cloneNode(true));
        }
        
    }
    generateDots();

    document.getElementById('communication').innerHTML = "What number comes next?";
    //Below generates the answer to the current problem and two unique incorrect answers.
    let answer, guess1, guess2;
    answer = currentNumber + 1;
    do{
        let badGuess1 = Math.floor(Math.random() * (numberPool.length - 1));
        guess1 = guessPool[badGuess1];
    } while (guess1 === currentNumber || guess1 === answer);

    do{
        let badGuess2 = Math.floor(Math.random() * (numberPool.length - 1));
        guess2 = guessPool[badGuess2];
    } while (guess2 === currentNumber || guess2 === answer || guess2 === guess1);

    console.log(currentNumber);
    console.log(answer);
    console.log(guess1);
    console.log(guess2);

    //Stopping here for now.  The function does correctly generate the answer and two unique incorrect guesses.  I need to figure out the best way to generate these in the DOM.  I'm thinking of just creating a div and have the order they appended to the 'guesses' div be random.  I may need to physically draw this as I'm having a little trouble visualizing it in my head, but there should be the number with dots below it and a radio button beneath the dots for that answer.  Will need Sabi's input on the CSS and naming conventions.
    //Also need to have the currentNumber removed from the NumberPool if the correct answer is chosen to prevent repeat questions.
}

document.getElementById('start').addEventListener('click', numLimit);