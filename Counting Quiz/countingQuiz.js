const start = document.getElementById('start');
const questionDots = document.getElementById('qdot');

let numberPool = [];
let failLimit;

//The numLimit function is to determine how many correct guesses need to be made to win.  The game will enter a fail state and reset if 2 more wrong answers than the number of correct answers are tallied.
const numLimit = () =>{
    let numQuestions= Number(window.prompt("How many numbers would you like to count?  Please choose a number between 3 and 10.", 3));

    if(numQuestions < 3){
        alert("Let's try to count at least 3 times.");
        numQuestions = 3;
        failLimit = numQuestions + 2;
        let upperLimit = Number(window.prompt("What's the highest number you would like to count to?", 20));
    }else if(numQuestions > 10){
        alert("I see you would like a challenge, but let's limit it to 10 times.");
        numQuestions = 10;
        failLimit = numQuestions + 2;
        let upperLimit = Number(window.prompt("What's the highest number you would like to count to?", 20));
        for(i = 1; i < upperLimit; i++){
            numberPool.push(i);
        }
    }else{
        failLimit = numQuestions + 2;
        let upperLimit = Number(window.prompt("What's the highest number you would like to count to?", 20));
        for(i = 1; i < upperLimit; i++){
            numberPool.push(i);
        }
    }

    console.log(numberPool);
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

}

document.getElementById('start').addEventListener('click', numLimit);