let boxes = document.querySelectorAll(".box")
let rest_btn = document.querySelector("#rest-btn")
let msg = document.querySelector(".msg")
let new_btn = document.querySelector("#new-game")
let div = document.querySelector(".winner")
let main = document.querySelector(".main")


let turn = "user1"

const winningPattern = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [3, 4, 5],
   [6, 7, 8],
   [1, 4, 7],
   [2, 5, 8],
   [6, 4, 2]
]

new_btn.addEventListener("click", () =>{
   location.reload()
})

rest_btn.addEventListener("click", ()=>{
   location.reload()
})

let showWinner = (pos1)=>{
   div.classList.remove("hide")
   msg.innerText = `Congratualtions!!! Winner is ${pos1}`
   for(let box of boxes){
      box.disabled = true;
   }
}

let gameOver = () => {
   main.className = "gameOver"
}

count = 0;
let checkWinner= ()=>{
   
   for(let winner of winningPattern){
      count++;
      let pos1 = boxes[winner[0]].innerText
      let pos2 = boxes[winner[1]].innerText
      let pos3 = boxes[winner[2]].innerText

      if(pos1 != "" && pos2 != "" && pos3 != ""){
         if(pos1 == pos2 && pos2 == pos3){
            showWinner(pos1)
            gameOver()
            break
         }
        
         else if(count == 72){
            div.classList.remove("hide")
            msg.innerText = `Match is Draw`
            gameOver()
         }
      }
      
   }
   count = count;
}

boxes.forEach((box)=>{
   box.addEventListener("click", () =>{
      if(turn === "user1"){
         box.innerText = "X"
         turn = "user2"
         
      }
      else{
         box.innerText = "O"
         turn = "user1"
      }
      box.disabled = true;
      checkWinner();
   })
   
  
})





