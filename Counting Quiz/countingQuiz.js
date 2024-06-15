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
    document.getElementById("guessDisplay").innerHTML = ""; //Reset's the guess display for each roll.
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

    //Stopping point for 6/1/24.  Below is the random guess generator.  It randomly assigns the guesses for the question.  Still need to have dots generated for each of the choices.

    let aguess = '<div class="gNumber" id="s">' + answer + '</div><div id="sDot"></div><input type="radio" name="dotGuess" id="guessS" value="' + answer + '><label for="guessS"></label>';
    let lguess = '<div class="lNumber" id="l">' + guess1 + '</div><div id="lDot"></div><input type="radio" name="dotGuess" id="guessL" value="' + guess1 + '"><label for="guessL"></label>';
    let dguess = '<div class="dNumber" id="d">' + guess2 + '</div><div id="dDot"></div><input type="radio" name="dotGuess" id="guessD" value="' + guess2 + '"><label for="guessD"></label>';

    let responses = [aguess, lguess, dguess];
    console.log(responses.length);
    do{
        let newPosition = Math.floor(Math.random() * (responses.length - 1));
        let problem = document.createElement('div');
        problem.setAttribute("class", "guess");
        problem.innerHTML = responses[newPosition];
        document.getElementById("guessDisplay").appendChild(problem);
        responses.splice(newPosition,1);
    } while (responses.length > 0);

    let guessDots = () =>{
        let colorDots = ["adot", "bdot", "cdot", "ddot", "edot", "fdot"];
        let randomColor, randomColor2, randomColor3;
        do{
            randomColor = Math.floor(Math.random() * (colorDots.length - 1));
            randomColor2 = Math.floor(Math.random() * (colorDots.length - 1));
            randomColor3 = Math.floor(Math.random() * (colorDots.length - 1));
        } while (randomColor === randomColor2 || randomColor === randomColor3 || randomColor2 === randomColor3);

        for(a=0; a < answer; a++){
            let gDot = document.createElement('div');
            gDot.setAttribute("class", colorDots[randomColor]);
            document.getElementById('sDot').appendChild(gDot.cloneNode(true));
        }

        for(b=0; b < guess1; b++){
            let wDot = document.createElement('div');
            wDot.setAttribute("class", colorDots[randomColor2]);
            document.getElementById('lDot').appendChild(wDot.cloneNode(true));
        }

        for(c=0; c < guess2; c++){
            let hDot = document.createElement('div');
            hDot.setAttribute("class", colorDots[randomColor3]);
            document.getElementById('dDot').appendChild(hDot.cloneNode(true));
        }
        console.log(colorDots.length);
    }
    guessDots();
    //Above is the function to generate the dots for the guesses, this might be able to be combined to function that generates dots for the question as well.  Need to work on the CSS before I continue with the function of the game.
    //Also need to have the currentNumber removed from the NumberPool if the correct answer is chosen to prevent repeat questions.
}

document.getElementById('start').addEventListener('click', numLimit);