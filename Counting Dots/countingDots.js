const action = document.getElementById('action');
const addDots = document.getElementById('actionAdd');
const dotContainer = document.getElementById('d1');

let countingLimit = 5;
let questionType = null;
//Below is the startup, to set what limit should be set on how many dots should be made

const countStartUp = () =>{
    const newLimit = Number(window.prompt("How many dots would you like to count?", 10));

    if(newLimit < 1){
        alert("We can't count nothing! We'll use 10 as the limit");
        countingLimit = 10;
    }else if(newLimit > 100){
        alert("We'd be here all day counting with that number! Let's default to 10.");
        countingLimit = 10;
    }else{
        countingLimit = newLimit * 1;
    }

    action.innerHTML = "Roll"
    addDots.disabled = true;
    action.removeEventListener('click', countStartUp);
}
//addStartUp function is meant to initialize the adding dots game
const addStartUp = () =>{
    const newLimit = Number(window.prompt("How many dots would you like to count?", 10));

    if(newLimit < 1){
        alert("We can't add nothing (technically we can but for the sake of learning let's not)! We'll use 10 as the limit");
        countingLimit = 10;
    }else if(newLimit > 100){
        alert("We'd be here all day adding with that number! Let's default to 10.");
        countingLimit = 10;
    }else{
        countingLimit = newLimit * 1;
    }
    //Will require 3 spaces, 2 divs for the 2 sets of dots, and then an input box for the answer.  Need these to generate in the initial div, will use the appendChild but all elements will have to have the class of 'adding'. After that is done will just need to write the math logic
    let dot1 = document.createElement('div');
    let dot2 = document.createElement('div');
    let addProblem = document.createElement('div');
    let addSolution = document.createElement('div');
    let addQuestion = document.createElement('div');
    dot1.className += "addDots";
    dot2.className += "addDots";
    addProblem.className += "addDots";
    dot1.id += "leftDots";
    dot2.id += "rightDots";
    addProblem.id += "problem";
    addSolution.id += "solution";
    addQuestion.id += "question";
    addSolution.innerHTML = '<input id="bestGuess" type="number">'; //Will need to use the valueAsNumber property for the input number
    //Above creates the unique 'divs' that are required for the adding dots app, Below is where they will occupy the initial 'div' with the current id of d1
    dotContainer.appendChild(dot1);
    dotContainer.appendChild(dot2);
    dotContainer.appendChild(addProblem);
    addProblem.appendChild(addQuestion);
    addProblem.appendChild(addSolution);
    //Tested the above code and everything is situated about where I want them, CSS will be a pain but will worry about that later
    action.disabled = true;
    document.getElementById("bestGuess").addEventListener('change', ()=>{
        if(document.getElementById("bestGuess").value == "" || document.getElementById("bestGuess").value == null){
            addDots.disabled = true;
            console.log("The field is blank")
        }else{
            addDots.disabled = false;
            console.log("The field has value")
        }
    });
    //The above function was a little bit annoying.  If I didn't include the || with the null part it would erase whatever was typed in the input.  Make sure to take account of Null
    addDots.innerHTML = "Check Answer"
    addDots.disabled = true;
    addDots.removeEventListener('click', addStartUp)
}

let generateProblem = () =>{
    addDots.innerHTML = "Check Answer"
    addDots.disabled = true;
    let leftSide = document.getElementById("leftDots");
    let rightSide = document.getElementById("rightDots");
    let solution = document.getElementById("bestGuess");
    let question = document.getElementById("question");

    leftSide.innerHTML = "";
    rightSide.innerHTML = "";
    solution.value = null;
    question.innerHTML = "";

    let dotOne = document.createElement('div');
    let dotTwo = document.createElement('div');
    let dotThree = document.createElement('div');
    let dotFour = document.createElement('div');
    dotOne.setAttribute('class','dot');
    dotTwo.setAttribute('class', 'dot2');
    dotThree.setAttribute('class', 'dot3');
    dotFour.setAttribute('class', 'dot4');

    let variableOne = Math.floor(Math.random() * countingLimit);
    let variableTwo = Math.floor(Math.random() * countingLimit);

    for(a = 0; a < variableOne; a++){
        let randomDotColor = Math.floor(Math.random() * 4);
        switch(randomDotColor){
            case 0:
                leftSide.appendChild(dotOne.cloneNode(true));
                break;
            case 1:
                leftSide.appendChild(dotTwo.cloneNode(true));
                break;
            case 2:
                leftSide.appendChild(dotThree.cloneNode(true));
                break;
            case 3:
                leftSide.appendChild(dotFour.cloneNode(true));
                break;
            default:
                console.log(randomDotColor);
        }
    }

    for(b = 0; b < variableTwo; b++){
        let randomDotColor = Math.floor(Math.random() * 4);
        switch(randomDotColor){
            case 0:
                rightSide.appendChild(dotOne.cloneNode(true));
                break;
            case 1:
                rightSide.appendChild(dotTwo.cloneNode(true));
                break;
            case 2:
                rightSide.appendChild(dotThree.cloneNode(true));
                break;
            case 3:
                rightSide.appendChild(dotFour.cloneNode(true));
                break;
            default:
                console.log(randomDotColor);
        }
    }

    let randomQuestion = Math.floor(Math.random() * 4);

    switch(randomQuestion){
        case 0:
            question.innerHTML = '<p>How many <font color="pink">PINK</font> dots are there in total?</p>';
            questionType = 0;
            break;
        case 1: 
            question.innerHTML = '<p>How many <font color="blue">BLUE</font> dots are there in total?</p>';
            questionType = 1;
            break;
        case 2:
            question.innerHTML = '<p>How many <font color="green">GREEN</font> dots are there in total?</p>';
            questionType = 2;
            break;
        case 3:
            question.innerHTML = '<p>How many <font color="purple">PURPLE</font> dots are there in total?</p>';
            questionType = 3;
            break;
        default:
            console.log('An error has occured');
    }

    console.log('The answer is ' + (variableOne + variableTwo));
    console.log('The left side has ' + leftSide.childElementCount + ' dots');
    console.log('The right side has ' + rightSide.childElementCount + ' dots');
    console.log('Question set ' + randomQuestion);
    console.log(document.getElementsByClassName('dot').length + 'pink dots');
    console.log(document.getElementsByClassName('dot2').length + 'blue dots');
    console.log(document.getElementsByClassName('dot3').length + 'green dots');
    console.log(document.getElementsByClassName('dot4').length + 'purple dots');

    addDots.addEventListener('click', checkSolution);
    addDots.removeEventListener('click', generateProblem);
    //Made some adjustments above to randomly decide the color of the dots, this should allow for more complex questions
}
//Stopping here, need to adjust checkSolution, I need to find a way to count the specific children within the two containers
let checkSolution = () =>{
    let guess = document.getElementById("bestGuess").value * 1;
    let questionCheck = "";

    switch(questionType){
        case 0:
            questionCheck = document.getElementsByClassName('dot').length;
            break;
        case 1:
            questionCheck = document.getElementsByClassName('dot2').length;
            break;
        case 2:
            questionCheck = document.getElementsByClassName('dot3').length;
            break;
        case 3:
            questionCheck = document.getElementsByClassName('dot4').length;
            break;
        default:
            questionCheck = 0;
    }

    if(guess === questionCheck){
        if(window.confirm("You got it! Want to do another one? 😽")){
            generateProblem();
        }else{
            location.reload();
        };
        
    }else if(guess > questionCheck){
        alert('That guess seems high, please count all of the dots again 🤔');
    }else{
        alert('That guess is a bit too low. How about we try again? 😅');
    }
}
//Stopping here, finished the checkSolution function and it is working as intended, but I reeeeeally need to do the CSS next 😒 but this isn't the end of the world, I will survive.
let generateDots = () =>{
    dotContainer.innerHTML = "";
    let newDot = document.createElement('div');
    newDot.setAttribute('class','dot');
    let randomDots = Math.ceil(Math.random() * countingLimit);

    for(i = 0; i < randomDots; i++){
        dotContainer.appendChild(newDot.cloneNode(true));
    }

    console.log('I ran ' + randomDots);
}

action.addEventListener('click', countStartUp);
action.addEventListener('click', generateDots);
addDots.addEventListener('click', addStartUp);
addDots.addEventListener('click', generateProblem);