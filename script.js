'use strict';
// console.log(document.querySelector('.message').textContent);
// // console.log(document.querySelector('.message'));
// // document.querySelector('.message').textContent = 'Correct Number!';
// // document.querySelector('.guess').value = Number(prompt('Guess Number'));
// console.log(document.querySelector('.guess').value);
// document.querySelector('.number').textContent = 14;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore=0;
document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number !';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width= '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score>highscore){
            document.querySelector('.highscore').textContent=score;
            highscore=score;
        }
    }
    else if( guess!== secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = guess>secretNumber?'Too High!':'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
            } else {
            document.querySelector('.message').textContent = 'You Lost the game!';
            }
    }
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too High!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //     document.querySelector('.message').textContent = 'You Lost the game!';
    //     }
    // }
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost the game!';
    //     }
    // }
});

/*

        ///////////////////Coding Challenge #1/////////////////
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
*/
document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    let score = 20;
    document.querySelector('.message').textContent= 'Start guessing...';
    console.log(document.querySelector('.message').textContent);
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=score;
    console.log(document.querySelector('.guess').value=" ");
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});
