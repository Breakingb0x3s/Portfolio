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

const addStartUp = () =>{
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
    addSolution.innerHTML = '<input type="number">'; //Will need to use the valueAsNumber property for the input number
    //Above creates the unique 'divs' that are required for the adding dots app, Below is where they will occupy the initial 'div' with the current id of d1
    dotContainer.appendChild(dot1);
    dotContainer.appendChild(dot2);
    dotContainer.appendChild(addSolution);
    //Pausing here, tested the above code and everything is situated about where I want them, CSS will be a pain but will worry about that later
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