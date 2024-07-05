let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
  score = {
    lose: 0,
    win: 0,
    tie: 0
  };

}
let com;
let user = '';
let result;


function comMove() {
  com = Math.floor(Math.random() * 3);
  if (com === 0)
    com = 'rock';
  else if (com === 1)
    com = 'paper';
  else
    com = 'scissors';
  console.log(com);
}
function rock() {
  user = 'rock';
  comMove();
  if (com === 'rock') {
    result = 'Tie';
    score.tie++;
  }
  else if (com === 'paper') {
    result = 'Lose';
    score.lose++;
  }
  else { result = 'Win'; score.win++; }

  localStorage.setItem('score', JSON.stringify(score));
  // alert(``);
  updatescore();

}
function paper() {
  user = 'paper';
  comMove();
  if (com === 'rock') { result = 'Win'; score.win++; }
  else if (com === 'paper') {
    result = 'Tie';
    score.tie++;
  }
  else {
    result = 'Lose';
    score.lose++;
  }
  localStorage.setItem('score', JSON.stringify(score));
  updatescore();
  // scoreBoard.innerHTML=`Wins : ${score.win} Loses ${score.lose} tie ${score.tie}`;
}
function scissor() {
  user = 'scissors';
  comMove();
  if (com === 'rock') {
    result = 'Lose';
    score.lose++;
  }

  else if (com === 'paper') { result = 'Win'; score.win++; }

  else {
    result = 'Tie';
    score.tie++;
  }
  localStorage.setItem('score', JSON.stringify(score));
  updatescore();
  // scoreBoard.innerHTML=`Wins : ${score.win} Loses ${score.lose} tie ${score.tie}`;
}
function updatescore() {
  let moves = document.querySelector('.js-move');
  moves.innerHTML = ` You 
    <img src="${user}-emoji.png"  class="move-icon">
    <img src="${com}-emoji.png"  class="move-icon">
    Computer`;
  let scores = document.querySelector('.js-score');
  scores.innerHTML = `
        Wins : ${score.win} . Loses :  ${score.lose} . Tie : ${score.tie}
        `;
  let results = document.querySelector('.js-result');
  if (result !== 'Tie')
    results.innerHTML = `You ${result}`;
  else
    results.innerHTML = `${result}`;
}
let isplaying = false;
let intervalID;
function autoplay() {
  if (!isplaying) {
    intervalID = setInterval(function () {

      comMove();
      user = com;
      if (user === 'rock')
        rock();
      else if (user === 'paper') paper();
      else scissor();

    }, 1000);
    isplaying=true;
  }
  else {
    clearInterval(intervalID);
    isplaying = false;
  }

}
document.querySelector('.js-rock').addEventListener('click',()=>{
 rock();
});
document.querySelector('.js-paper').addEventListener('click',()=>{
  paper();
 });
 document.querySelector('.js-scissor').addEventListener('click',()=>{
  scissor();
 });
 document.body.addEventListener('keydown',(event)=>
{
if(event.key==='r')
  rock();
else if(event.key==='p')
  paper();
else if(event.key==='s')  
  scissor();
});