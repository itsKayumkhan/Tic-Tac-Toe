// const play = new Audio();
// const game_over = new Audio();
// const background = new Audio();

// let is_gameOver = false;
// let turn = "X";

// const change_turn = () => `turn === "X" ? "0" : "X"`;

// const checkWin = () => {
//      let btn = document.getElementsByClassName("box");
//       let win = [
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,4,8],
//         [2,4,6],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//       ]
//       win.forEach( e =>{
//         if((btn[e[0]].innerText === btn[e[1]].innerText)  && (btn[e[2]].innerText === btn[e[1]].innerText)  && btn[e[0]].innerText !== "")
//         {
//             document.querySelector(".info").innerText = btn[e[0]].innerText + "is won";
//             is_gameOver = true; 
          
//         }
//       })
// }


//   let box = document.getElementsByClassName("square");
//   Array.from(box).forEach(e => {
//     let boxes = e.querySelectorAll('.box');
//    e.addEventListener('click', () =>
//    {
//     if(boxes.innerText === '')
//     {
//       boxes.innerText = turn;
//       turn = change_turn();
//       checkWin();
//       if(!is_gameOver)
//       document.getElementsByClassName("info")[0].innerText = "turn for " + turn ;


//     }
//    })
//   })



// btn.addEventListener('click', () => {
//             let btn = document.querySelectorAll(".box").innerText="";
//             Array.from(btn).forEach(element => {
//               element.innerText = '';
//             });
            
//             is_gameOver=false;
//             turn = "X";
//             document.getElementsByClassName("info")[].innerText = "turn of " + turn ;


// })
const play = new Audio();
const game_over = new Audio();
const background = new Audio();

let is_gameOver = false;
let turn = "X";

const change_turn = () => turn === "X" ? "O" : "X";

const checkWin = () => {
  let boxes = document.getElementsByClassName("box");
  let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
  ]
  win.forEach( e =>{
    if((boxes[e[0]].innerText === boxes[e[1]].innerText)  && (boxes[e[2]].innerText === boxes[e[1]].innerText)  && boxes[e[0]].innerText !== "")
    {
        document.querySelector(".info").innerText = boxes[e[0]].innerText + " is won";
        is_gameOver = true; 
      
    }
  })
}


let box = document.getElementsByClassName("square");
Array.from(box).forEach(e => {
  let boxes = e.querySelectorAll('.box');
  e.addEventListener('click', () => {
    if(boxes[0].innerText === '') {
      boxes[0].innerText = turn;
      turn = change_turn();
      checkWin();
      if(!is_gameOver)
        document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
    }
  });
});

btn.addEventListener('click', () => {
  let boxes = document.querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerText = '';
  }
            
  is_gameOver = false;
  turn = "X";
  document.getElementsByClassName("info")[0].innerText = "turn of " + turn;
});


// let btn = document.getElementById("reset");
// btn.addEventListener('click', () => {
//   let boxes = document.querySelectorAll(".box");
//   Array.from(boxes).forEach(element => {
//     element.innerText = '';
//   });
            
//   is_gameOver = false;
//   turn = "X";
//   document.getElementsByClassName("info")[0].innerText = "turn of " + turn;
// });
