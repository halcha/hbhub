//when 'view prizes' gets clicked/touched, this function reveals the prizes modal
//when the gray area around the modal gets clicked/touched, this function hides the prizes modal



function fixPages() {
  let y = document.getElementsByClassName("content");
  for (i = 0; i < y.length; i++) {
    y[i].classList.toggle("fix-display");
  }
}

function showModals(m) {
  let n = m.getAttribute('mid');
  let x = document.getElementById(n); 
  x.classList.toggle("no-display");
  fixPages();
}

function hideModals (e) {

}

//Hide Modal 

let m = document.getElementsByClassName("modal");
for (i = 0; i < m.length; i++) {
  m[i].addEventListener("click", function(e) {
  
    if (e.target !== e.currentTarget) {
      //return;
      console.log("test");
    }
    else {
    console.log("Clicked the parent");
    e.currentTarget.classList.toggle("no-display");
    }
  });
}

// document.addEventListener("click", function(e) {
//   console.log("the target is: " + e.target + " and the current target is: " + e.currentTarget + "the child of ");
// })