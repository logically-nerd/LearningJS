'use strict';
let num = Math.trunc(Math.random() * 20 + 1);
//to get random number from 1 to 20
let inputNum;
let score = 20, highscore = 0;
const valueCheck = () => {
    inputNum = Number(document.querySelector('input').value);
    if (inputNum === num) {
        document.querySelector('.display-num').textContent = num;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            document.querySelector('.message').textContent = 'Correct Answer!';
        }
        document.querySelector('body').style.backgroundColor='green';
    } else {
        let msg;
        if (score == 1) {
            msg = 'You Lost the Game!';
        }
        else if (inputNum > num) {
            msg = 'Too High!';
        } else {
            msg = 'Too Low!';
        }
        document.querySelector('.message').textContent = msg;
        score--;
        document.querySelector('.score').textContent = score;
    }
    if (!score || num === inputNum) {
        document.querySelector('.check').disabled = true;
    }
}
document.querySelector('.check').addEventListener('click',valueCheck);
document.querySelector('input').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        valueCheck();
    }
})
document.querySelector('.replay').addEventListener('click', () => {
    num = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.display-num').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '20';
    document.querySelector('input').value = '';
    document.querySelector('.check').disabled = false;
    document.querySelector('body').style.backgroundColor = 'darkgrey';

})