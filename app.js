let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let ruler = document.querySelector("hr");


// Track whose turn it is playerX or playerO

let turnO = true;

const winPat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () => {
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide");
    ruler.classList.add("hide");


}


boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBtns = ()=>{
    for(let box of boxes){
        box.disabled = true; 
    }
}

const enableBtns = ()=>{
    for(let box of boxes){
        box.disabled = false; 
        box.innerText ="";
    }
}


showWinner = (winner) =>{
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    ruler.classList.remove("hide");
    disableBtns();
}


const checkWinner = () => {
    for(let patterns of winPat){
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner");
                showWinner(pos1Val);
            }
        }

    }
}

resetBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
newBtn.addEventListener("click",resetgame);