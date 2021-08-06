'use strict';
//declaring some variables
const score0El= document.querySelector('#score--0');
const score1El= document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');
const player0El= document.querySelector('.player--0');
const player1El= document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent= 0;
diceEl.classList.add('hidden');

let currentScore,activePlayer,scores,playing;

const init=function(){
    currentScore=0;
    activePlayer=0;
    scores=[0,0];
    playing=0;
    score0El.textContent = 0;
    score1El.textContent= 0;
    diceEl.classList.add('hidden');
    player0El.classList.add('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--active','player--winner');
}
init()

const switchPlayer=function(){
    currentScore=0;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    activePlayer=activePlayer===0?1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// functionality for dice rolling btn
btnRoll.addEventListener('click', function(){
    if(playing===0){
        //generating a random dice number
        const dice= Math.trunc(Math.random()*6)+1;

        // displaying dice picture
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${dice}.png`;//we have added different Images according to dice number;

        //functionality of current score
        if(dice!==1){
            currentScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
            // current0El.textContent=currentScore;
        }
        else{
            switchPlayer();
        }
    }
});
// functionality of Hold key
btnHold.addEventListener('click', function(){
    if(playing===0){
        scores[activePlayer]+=currentScore;
        console.log(scores[activePlayer]);
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        if(scores[activePlayer]>=100){
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
            playing=1;
        }
        else{
            switchPlayer();
        }
    }
});

//functionality of btnNew
btnNew.addEventListener('click', init);


