# Math ~~Test~~ Quiz

## Objective

To create a math sheet that will test the user on 5 math problems in a selected operator i.e.) addition, subtraction, multiplication, and division.
May try to add fractions in the future

## Plan

Starting on 1/4/2023 I will make a page with two options.
Max number value, must make sure the entry is greater than 0.
And the operation being tested.
I will also have an input field for the user's name.

### Design

The initial page will have the above options and a start button.
After the data has been entered, the screen should display 5 problems with an input field for each question.
Will avoid using a number limiter as I may want to include fractions and algebra in the future
There will also be a timer and a submit button.
After all answers are entered and submitted, a pop up with the user's score and letter grade will appear.
This message will come with their time and a motivational statement concerning both variables.
Upon closing the pop up, there should be correct answers shown in a high contrast color next to problems answered wrong and a note to refresh the page to start again.

## Progress/Updates

1/4/2023 - Created the html structure. Need to tackle JS next.
Have to keep in mind generating the problems and hiding selection.
Debating if I should do CSS before or after JS, regardless one idea I have is the have the problems drop down and rest on their lines.  Will probably need to go with a grid design instead of a flexbox.

1/5/2023 - I'm kinda embarrased how long it took me to figure out how to generate div's with a distinct id in a for loop, but I figured it out.  Now the problems will generate 5 new problems everytime it is clicked.  I can easily take advantage of this by making a new set if they get too many wrong, but first I'll need to get to the grading step.

I think the best approach would be to create a button, disable the visibility and have the visibility restored when the quiz button is clicked, and then disable the quiz button so it's not spammed for infinite problems.

Although, I also need to add some CSS to format these problems better, it annoys me how they look now.  Also need to still figure out how to add an animation for each question as it appears! (fuuuuuuuun)

1/6/2023 - Still sinking in that it's 2023, anyway, I updated the Math Quiz project, getting ready to perform a commit to the main branch.  The Math Quiz project just needs the simple Division operation coded in for the main part, after that it's creating (hopefully) just two other functions, one for the timer and one for grading the quiz.

1/14/2023 - Just finished all the functionality of the project, it generates problems correctly and checks the input answers.  It will also post the stats of each attempt under the HighScores section.  Just need to stylize it, which includes:
1. Picking a theme
2. Animate the problems as they appear
3. Font/Style for the highscores (might try to see if there's a Street Fighter theme I can do here)