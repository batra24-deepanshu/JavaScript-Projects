'use strict';
const player0EL=document.querySelector('.player--0')
const player1EL=document.querySelector('.player--1')

const diceEL=document.querySelector('.dice');

const current0EL=document.getElementById('current--0')
const current1EL=document.getElementById('current--1')

const score0EL=document.querySelector('#score--0')
const score1EL=document.getElementById('score--1')

const btnNew=document.querySelector('.btn--new')
const btnHold=document.querySelector('.btn--hold')
const btnRoll=document.querySelector('.btn--roll')
let playing,activePlayer,currentscore,scores;
const init=function(){
    scores=[0,0]
    playing=true;
    activePlayer=0;
    currentscore=0;
    current0EL.textContent=0;
    current1EL.textContent=0;
    score0EL.textContent=0;
    score1EL.textContent=0;
    player0EL.classList.remove('player--winner')
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active')
    player1EL.classList.remove('player--active')
    diceEL.classList.add('hidden')
}
init()

const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentscore=0;
    activePlayer=activePlayer===0 ? 1 : 0;
    player0EL.classList.toggle('player--active')
    player1EL.classList.toggle('player--active')
}
btnRoll.addEventListener('click',function(){
    if(playing){
        const dice=Math.trunc(Math.random()*6)+1;
        diceEL.classList.remove('hidden');
        diceEL.src=`dice-${dice}.png`

        if(dice!=1){
            currentscore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentscore;
        }
        else{
            switchPlayer();
        }
    }
})
btnHold.addEventListener('click',function(){
    if(playing){
        scores[activePlayer]+=currentscore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]

        if(scores[activePlayer]>=100){
            playing=false;
            diceEL.classList.add('hidden');
            document.querySelector(`player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`player--${activePlayer}`).classList.remove('player--active')
        }
        else{
            switchPlayer();
        }
    }
})
btnNew.addEventListener('click',init)