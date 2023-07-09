const action = document.getElementById('action');
const addDots = document.getElementById('actionAdd');
const dotContainer = document.getElementById('d1');

let countingLimit = 5;
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
    let addSolution = document.createElement('div');
    dot1.className += "addDots";
    dot2.className += "addDots";
    addSolution.className += "addDots";
    dot1.id += "leftDots";
    dot2.id += "rightDots";
    addSolution.id += "solution";
    addSolution.innerHTML = '<input id="bestGuess" type="number">'; //Will need to use the valueAsNumber property for the input number
    //Above creates the unique 'divs' that are required for the adding dots app, Below is where they will occupy the initial 'div' with the current id of d1
    dotContainer.appendChild(dot1);
    dotContainer.appendChild(dot2);
    dotContainer.appendChild(addSolution);
    //Pausing here, tested the above code and everything is situated about where I want them, CSS will be a pain but will worry about that later
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
    addDots.disabled = true;
    let leftSide = document.getElementById("leftDots");
    let rightSide = document.getElementById("rightDots");
    let solution = document.getElementById("bestGuess");

    leftSide.innerHTML = "";
    rightSide.innerHTML = "";
    solution.value = null;

    let newDot = document.createElement('div');
    let otherDot = document.createElement('div');
    newDot.setAttribute('class','dot');
    otherDot.setAttribute('class', 'dot2');

    let variableOne = Math.floor(Math.random() * countingLimit);
    let variableTwo = Math.floor(Math.random() * countingLimit);

    for(a = 0; a < variableOne; a++){
        leftSide.appendChild(newDot.cloneNode(true));
    }

    for(b = 0; b < variableTwo; b++){
        rightSide.appendChild(otherDot.cloneNode(true));
    }

    console.log('The answer is ' + (variableOne + variableTwo));
    //Stopping here, need to make a function for checking the guess.  If the guess is wrong I don't want the above function to run, however if it is correct I want a popup to congradulate the user and then run the above code for a new problem.
}

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