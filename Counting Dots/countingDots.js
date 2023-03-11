const action = document.getElementById('action');
const dotContainer = document.getElementById('d1');

let countingLimit = 5;
//Below is the startup, to set what limit should be set on how many dots should be made

const startUp = () =>{
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
    action.removeEventListener('click', startUp);
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

action.addEventListener('click', startUp);
action.addEventListener('click', generateDots);