const start = document.getElementById('start');

let numberPool = [];
let failLimit, questionLimit;

//The numLimit function is to determine how many correct guesses need to be made to win.  The game will enter a fail state and reset if 2 more wrong answers than the number of correct answers are tallied.
const numLimit = () =>{
    let numQuestions= Number(window.prompt("How many numbers would you like to count?  Please choose a number between 3 and 10.", 3));

    if(numLimit < 3){
        alert("Let's try to count at least 3 times.");
        questionLimit = 3;
        failLimit = questionLimit + 2;
        let upperLimit = Number(window.prompt("What's the highest number you would like to count to?", 20));
    }else if(numLimit > 10){
        alert("I see you would like a challenge, but let's limit it to 10 times.");
        questionLimit = 10;
        failLimit = questionLimit + 2;
        let upperLimit = Number(window.prompt("What's the highest number you would like to count to?", 20));
    }else{
        questionLimit = numQuestions * 1;
        failLimit = questionLimit + 2;
        let upperLimit = Number(window.prompt("What's the highest number you would like to count to?", 20));
    }

    //Will need to add a trigger to have the game load another function to start the game
}

let countingNumber = ()=>{
    //Current stoping point as of 5/15. This function will generate the number and the guesses (2 wrong and 1 right guess) for what comes after the generated number
}