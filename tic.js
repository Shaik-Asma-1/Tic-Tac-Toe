let boxes=document.querySelectorAll(".box");

let newGame=document.querySelector("#new-btn");
let ResetGame=document.querySelector("#reset-btn");

let msg=document.querySelector("#msg");
let cont=document.querySelector(".msg-container");

let turn0=true;
let count=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        count++;
        box.disabled=true;
        let winner=checkWinner();
        if(count===9 && !winner){
            drawGame();
        }
    });
})

const drawGame=()=>{
    msg.innerText=`Game is draw.`;
    cont.classList.remove("hide");
    disableBox();
}
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const checkWinner=()=>{
   for(let patt of winPatterns){
    let pos1=boxes[patt[0]].innerText;
    let pos2=boxes[patt[1]].innerText;
    let pos3=boxes[patt[2]].innerText
    if(pos1!=""&& pos2!="" && pos3!=""){
        if(pos1==pos2 && pos1==pos3){
            showWinner(pos1);
            return true;
        }
    }
   }
}

const showWinner=(pos1)=>{
    msg.innerHTML=`Hurray....Winner is ${pos1} !`;
    cont.classList.remove("hide");
    disableBox();
}

const resetGame=()=>{
    turn0=true;
    count=0;
    enableBox();
    cont.classList.add("hide");
}

newGame.addEventListener("click",resetGame);
ResetGame.addEventListener("click",resetGame);