let quiz = document.getElementById('quiz');
const start = document.getElementById('startQ');
const solve = document.getElementById('solve');
let counter = 1;

//Generate Quiz Section
let generateQuiz = () =>{
    const maxNum = document.getElementById('maxNum').value; //Need to fix this a bit, as it stands now it excludes the maxNumber, not include it but I also want 0 included as well so the ceil function isn't an answer...arrgh!!
    const operation = document.getElementById('operation').value;
    //Subtraction wasn't working with the variables q (for question) and an (for answer) so I changed their scope to be within the function instead of the switch statement
    let problem;
    let q;
    let an;
    let a;
    let b;
    
    quiz.innerHTML = "";
    solve.disabled = false;

    if(maxNum <= 0){
        alert("Please make sure you've entered a max Value greater than 0 and have chosen an operation.")
    }else{
        switch(operation){
            case 'addition':
                for(let i = 0; i < 5; i++){
                    a = Math.floor(Math.random() * maxNum); //Using maxNum + 1 doesn't work, and neither does numMax++ need to really fix it somehow
                    b = Math.floor(Math.random() * maxNum);
                    q = a + ' + ' + b + ' = ';
                    an = a + b;
                    problem = document.createElement('div');
                    problem.setAttribute("id", "problem"); //Okay, the code below works, so I decided not to number the problem divs since it'll make CSS a lot more simple
                    //Below will create a numbered div for each of the 5 problems uising a for loop.  I set it up this way so in the future if I want I can easily expand beyond 5 problems.
                    problem.innerHTML = '<div id ="question' + i + '">' + q + '</div><input type="text" id="sol' + i + '" name="sol' + i + '"><div hidden id="answer' + i +'">' + an + '</div>'
                    quiz.appendChild(problem);
                }
                break;
            case 'subtraction':
                for(let i = 0; i < 5; i++){
                    a = Math.floor(Math.random() * maxNum);
                    b = Math.floor(Math.random() * maxNum);

                    if(a > b){
                        q = a + ' - ' + b + ' = ';
                        an = a - b;
                    }else{
                        q = b + ' - ' + a + ' = ';
                        an = b - a;
                    }

                    problem = document.createElement('div');
                    problem.setAttribute("id", "problem");
                    problem.innerHTML = '<div id ="question' + i + '">' + q + '</div><input type="text" id="sol' + i + '" name="sol' + i + '"><div hidden id="answer' + i +'">' + an + '</div>';
                    quiz.appendChild(problem);
                }
                break;
            case 'multiplication':
                for(let i = 0; i < 5; i++){
                    a = Math.floor(Math.random() * maxNum);
                    b = Math.floor(Math.random() * maxNum);
                    q = a + ' x ' + b + ' = '; //Might change x to *, unsure
                    an = a * b;
                    problem = document.createElement('div');
                    problem.setAttribute("id", "problem");
                    problem.innerHTML = '<div id ="question' + i + '">' + q + '</div><input type="text" id="sol' + i + '" name="sol' + i + '"><div hidden id="answer' + i +'">' + an + '</div>';
                    quiz.appendChild(problem);
                }
                break;
            case 'division':
                for(let i = 0; i < 5; i++){
                    b = Math.floor(Math.random() * maxNum);
                    if(b < 11){
                        a = Math.floor(Math.random() * 13) * b;
                    }else{
                        a = Math.floor(Math.random() * 6) * b;
                    }
                    q = a + ' ÷ ' + b + ' = '
                    an = a / b;
                    problem = document.createElement('div');
                    problem.setAttribute("id", "problem");
                    problem.innerHTML = '<div id ="question' + i + '">' + q + '</div><input type="text" id="sol' + i + '" name="sol' + i + '"><div hidden id="answer' + i +'">' + an + '</div>';
                    quiz.appendChild(problem);
                }
                break;
            default: alert("This operation has not been coded yet.")
        }
    }
    
}


//Stopwatch Start
let stopWatch = document.getElementById('stopWatch');
let timer = false;
let min = 0;
let sec = 0;
let mil = 0;

let startStopWatch = () =>{
    
    if (timer) {
        mil+= 10;

            if (mil == 1000){
                sec++;
                mil = 0;
            }
            if (sec == 60){
                min++;
                second = 0;
            }

            let minute = min;
            let second = sec;
            let mS = mil;

            if (min < 10){
                minute = '0' + minute;
            }
            if (sec < 10){
                second = '0' + second;
            }
            if (mil < 100){
                mS = '00' + mS;
            }else if(mil < 1000){
                mS = '0' + mS;
            }

            stopWatch.innerHTML = minute + ' : ' + second + ' : ' + mS;
            setTimeout(startStopWatch, 10);
    }
}
//Finished adding the timer, works like it should will have to remember to remove the pause function from the solve button.  Solve button is the next step to code.


start.addEventListener('click', function(){
    timer = true;
});
start.addEventListener('click', generateQuiz);
start.addEventListener('click', startStopWatch);
start.addEventListener('click', function(){
    start.disabled = true;
})
solve.addEventListener('click', function(){
    timer = false;
});
solve.addEventListener('click', function(){
    start.disabled = false;
});

//Solve function starts below -Should check to make sure all fields are filled in or have empty fields default to an incorrect value
let gradeQuiz = () =>{
    let mark = 0;
    let letterGrade;
    let message;
    let stats;

    for(i = 0; i < 5; i++){
        let guessValue = 'sol' + i;
        let answerReveal = 'answer' + i;

        let guess = document.getElementById(guessValue).value;
        let correct = document.getElementById(answerReveal).innerHTML;

        if(guess === correct){
            document.getElementById('answer' + i).innerHTML = "✅";
            document.getElementById('answer' + i).hidden = false;
            mark = mark + 1;
        }else{
            document.getElementById('answer' + i).hidden = false;
        }
    }
    //Admittedly the grading system is very simple but I don't need anything robust if I'm only doing 5 problems at a time
    if((mark/5)*100 === 100){
        letterGrade = 'A+'
    }else if((mark/5)* 100 === 80){
        letterGrade = 'B'
    }else if((mark/5)*100 === 60){
        letterGrade = 'D'
    }else if((mark/5) < 60){
        letterGrade = 'F'
    }

    switch(letterGrade){
        case 'A+':
            message = 'Great job! Mabey try some harder settings?'
            break;
        case 'B':
            message = 'Good job, you really know your stuff!'
            break;
        case 'D':
            message = "Don't worry about taking your time, slow down and do it right!"
            break;
        default:
            message = "Failing is just our first attempt in learning, keep tyring!"
    }

    stats = document.getElementById('operation').value + ' :Max Num of ' + document.getElementById('maxNum').value + ' Grade: ' + letterGrade + ' Time: ' + stopWatch.innerHTML;
    alert(((mark/5)*100) + '% ' + letterGrade + ' ' + message + '   \n' + stats); //I do not like the formatting of this alert, but the only way around that seems to be creating a custom alert box which I am not doing at this time.
    //Now that the sheet has grading parameters I need to have the score recorded at the bottom of the Highscore list and then reset the quiz area
    let newHighScore = document.createElement("div");
    newHighScore.setAttribute('id', "score" + counter);
    newHighScore.innerHTML = stats;
    counter += 1;
    document.getElementById('highScore').appendChild(newHighScore);
    min = 0;
    sec = 0;
    mil = 0;

    solve.disabled = true;
}


solve.addEventListener('click', gradeQuiz);
