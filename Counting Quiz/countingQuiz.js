const start = document.getElementById('start');
const questionDots = document.getElementById('qdot');
const sCount = document.getElementsByName('courseSelect');
const startButton = document.getElementById('start');
const skipB = document.getElementById('skipCount');

let numberPool = [];
let guessPool = [];
let newGame = true;
let countMode = "random";
let failLimit, goalLimit, cLimit, skipNumber;

//The numLimit function is to determine how many correct guesses need to be made to win.  The game will enter a fail state and reset if 2 more wrong answers than the number of correct answers are tallied.
//Below is a for loop and function to make sure the user has selected a course and to make the number select for the skip counting feature visible if selected.
for(let a = 0; a < sCount.length; a++){
    sCount[a].onclick = userChoice;
};

function userChoice(){
    if(this.value == "skipCount"){
        if(skipB.checked == true){
            document.getElementById('skip').hidden = false;
        }else{
            document.getElementById('skip').hidden = true;
        }
    }else if(this.value == "sequential"){
        countMode = "sequential";
        startButton.disabled = false;
    }else if(this.value == "random"){
        countMode = "random";
        startButton.disabled = false;
    }
};

const numLimit = () =>{
    numberPool = [];
    guessPool = [];
    skipNumber = document.getElementById('skipBy').value;
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
                guessPool.push(i); //adjusted this from just being guessPool = numberPool, believe somewhere during the splicing event on the guess function it seems to be impacting the guess pool which it should not. Just finished testing and this was indeed the issue, but I don't completely get why.  May be a hoisting issue?
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
            guessPool.push(i);
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
            guessPool.push(i);
        }
    }
    goalLimit = numQuestions;


    const playerController = document.getElementById("start");
    const buttonEngage = ()=>{
        playerController.removeEventListener('click', numLimit);
        playerController.innerHTML = "Thinking...";
        playerController.setAttribute("class", "activeButton");
        playerController.addEventListener('click', numberGuess);
    };

    document.getElementById("scoreBoard").innerHTML = "";

    buttonEngage();
    countingNumber();
    document.getElementById('course').hidden = true;
    //Will need to add a trigger to have the game load another function to start the game
}

let countingNumber = ()=>{
    //Current stoping point as of 5/15. This function will generate the number and the guesses (2 wrong and 1 right guess) for what comes after the generated number
    document.getElementById("guessDisplay").innerHTML = ""; //Reset's the guess display for each roll.
    let currentNumber;
    let numberSelect = Math.floor(Math.random() * (numberPool.length - 1));  //Generates a valid index number to select from numberPool
    if(newGame === true){
        currentNumber = numberPool[numberSelect];
        document.getElementById('promptPort').innerHTML = currentNumber;
        newGame = false;
    }else{
        if(countMode == "sequential"){
            currentNumber = (document.getElementById('promptPort').innerHTML * 1) + (1 * skipNumber);
            document.getElementById('promptPort').innerHTML = currentNumber;
            console.log(currentNumber);
        }else if(countMode == "random"){
            currentNumber = numberPool[numberSelect];
            document.getElementById('promptPort').innerHTML = currentNumber;
        }
    }
        

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
    answer = currentNumber + (1 * skipNumber);
    do{
        let badGuess1 = Math.floor(Math.random() * (numberPool.length - 1));
        guess1 = guessPool[badGuess1];
    } while (guess1 === currentNumber || guess1 === answer);

    do{
        let badGuess2 = Math.floor(Math.random() * (numberPool.length - 1));
        guess2 = guessPool[badGuess2];
    } while (guess2 === currentNumber || guess2 === answer || guess2 === guess1);


    //Stopping point for 6/1/24.  Below is the random guess generator.  It randomly assigns the guesses for the question.  Still need to have dots generated for each of the choices.

    let aguess = '<div class="gNumber" id="s">' + answer + '</div><div id="sDot"></div><input type="radio" name="dotGuess" id="guessS" value="' + answer + '", required><label for="guessS"></label>'; //Had to add a required tag so non-selections won't go through.  Still need to add an alert letting the user know they need to select an answer. - 6/17/24
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
    }

    if(document.getElementById("scoreBoard").childElementCount == 0){

        let correctAnswers = document.createElement('div');
            correctAnswers.setAttribute("class", "score");
            correctAnswers.setAttribute("id", "cA");
            correctAnswers.innerHTML = 0;
        let incorrectAnswers = document.createElement('div');
            incorrectAnswers.setAttribute("class", "score");
            incorrectAnswers.setAttribute("id", "bA");
            incorrectAnswers.innerHTML = 0;
        document.getElementById("scoreBoard").appendChild(correctAnswers);
        document.getElementById("scoreBoard").appendChild(incorrectAnswers);
    };

    guessDots();
    //Above is the function to generate the dots for the guesses, this might be able to be combined to function that generates dots for the question as well.  Need to work on the CSS before I continue with the function of the game.
    //Also need to have the currentNumber removed from the NumberPool if the correct answer is chosen to prevent repeat questions.
}

let numberGuess = ()=>{
    let userGuess = document.querySelector('input[name="dotGuess"]:checked').value;
    let correctGuess = document.getElementById("s").innerHTML;
    let greenScore = document.getElementById("cA").innerHTML * 1;
    let redScore = document.getElementById("bA").innerHTML * 1;
// Believe I have removed all unnecessary console.logs as of 6/17/24
// The numberGuess function compares the guess to the answer, then identifies if this is a winning or loosing turn based on the logged score.  If the user wins or looses it should reload to start a new round.

    if(userGuess == correctGuess){
        greenScore += 1;
        document.getElementById("cA").innerHTML = greenScore;
        numberPool.splice(numberPool.indexOf((document.getElementById("promptPort").innerHTML * 1)), 1);
        if(goalLimit == greenScore){
            alert('You Did it! You got ' + goalLimit + ' correct!');
            document.getElementById('start').addEventListener('click', numLimit);
            document.getElementById('start').innerHTML = "Let's begin";
            document.getElementById('start').removeAttribute("class", "activeButton");
            document.getElementById("guessDisplay").innerHTML = "";
            document.getElementById('communication').innerHTML = "Want to try again?";
            document.getElementById('start').removeEventListener('click', numberGuess);
            document.getElementById('random').checked = false;
            document.getElementById('sequential').checked = false;
            document.getElementById('skipCount').checked = false;
            document.getElementById('course').hidden = false;
            document.getElementById('skip').hidden = true;
            newGame = true;
        }else{
            alert('Good job!');
            countingNumber();
        }
    }else{
        redScore += 1;
        document.getElementById("bA").innerHTML = redScore;
        if(failLimit == redScore){
            alert("Let's practice our counting and try again later");
            document.getElementById('start').addEventListener('click', numLimit);
            document.getElementById('start').innerHTML = "Let's begin";
            document.getElementById('start').removeAttribute("class", "activeButton");
            document.getElementById('communication').innerHTML = "Want to try again?"
            document.getElementById('start').removeEventListener('click', numberGuess);
            document.getElementById("guessDisplay").innerHTML = "";
            document.getElementById('random').checked = false;
            document.getElementById('sequential').checked = false;
            document.getElementById('skipCount').checked = false;
            document.getElementById('course').hidden = false;
            document.getElementById('skip').hidden = true;
            newGame = true;
        }else{
            alert('Not quite. You can only miss ' + (failLimit - redScore) + ' more questions');
            countingNumber();
        }
    }
}

document.getElementById('start').addEventListener('click', numLimit);