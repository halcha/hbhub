//when 'view prizes' gets clicked/touched, this function reveals the prizes modal
//when the gray area around the modal gets clicked/touched, this function hides the prizes modal

function prizeModal() {
    let x = document.getElementById("prize-draw-modal"); 
    let y = document.getElementsByClassName("content"); 
    x.classList.toggle("no-display");
    for (i = 0; i < y.length; i++) {
      y[i].classList.toggle("fix-display");
    }
}

function todayPollModal() {
  let x = document.getElementById("today-poll-modal"); 
  let y = document.getElementsByClassName("content"); 
  x.classList.toggle("no-display");
  for (i = 0; i < y.length; i++) {
    y[i].classList.toggle("fix-display");
  }
}