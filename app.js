let btn=document.querySelector('#btn1');
let startscreen=document.querySelector(".startscreen");
let playground=document.querySelector(".playground");
let gameover=document.querySelector(".gameover");
  let h2=document.querySelector('h2');
   let score=document.querySelector(".scorebox");


   let scorelist=[];
   
btn.addEventListener("click",function(){
    startscreen.style.display="none";
    playground.style.display="flex";
})
let highscore=document.querySelector("#btn2");
  highscore.addEventListener("click",function(){
    let max=scorelist[0];
    for(let i=0;i<scorelist.length;i++){
      if(scorelist[i]>max){
        max=scorelist[i];
      }
    }
    highscore.innerText=`${max}`;
  })
let btn1=document.querySelector("#btn2");
let gameseq=[];
let userseq=[];
let btns=["red","blue","green","yellow"]
let started=false;
let level= 0;
document.addEventListener("keydown",function(){
    if(started==false){
        console.log("the game is started");
        started=true;
        levelup();
    }
});
 function levelup(){

  userseq=[];
    level++;
  h2.innerText=`level ${level}`;
  //random button
  let num=Math.floor(Math.random()*3);
  let rcolor=btns[num];
  let randbutton=document.querySelector(`.${rcolor}`);
  /*console.log(randbutton);
  console.log(rcolor);
  console.log(num);*/
  gameseq.push(rcolor);
  //console.log(gameseq);
  btnflash(randbutton);
   
  
}

function btnflash(btn){
btn.classList.add("flash");
setTimeout(function(){
  btn.classList.remove("flash");
},100);
}

function btnpress(){
  console.log(this);// tells us the button that was being pressed
  let userbtn=this;
  btnflash(userbtn);
  let usercolor=userbtn.getAttribute("id");
  userseq.push(usercolor);
  console.log(userseq);
  matching(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click",btnpress);
}
function matching(indx){
  //console.log(level);
 
  if(userseq[indx]===gameseq[indx]){
    if(userseq.length==gameseq.length){
      setTimeout(levelup,600);
     
  score.innerText=`${level}`;
  scorelist.push(level);
  console.log(scorelist);

    }

  }
  else{
    h2.innerText=`GAME OVER`;
    overscreen();
  }
}
function overscreen(){
  playground.style.display="none";
  gameover.style.display="flex";
  let tryagain=document.querySelector("#try");
  let endgame=document.querySelector("#end");
  tryagain.addEventListener("click",reset);
  let score=document.querySelector(".scoredis");
  score.innerText=`${level-1}`;
 }
function reset(){
  startscreen.style.display="flex";
    playground.style.display="none";
    gameover.style.display="none";
    h2.innerText="press any key to start";
  started=false;
  gameseq=[];
  userseq=[];
  level=0;
  score.innerText="0";

}