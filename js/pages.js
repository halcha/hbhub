//when 'view prizes' gets clicked/touched, this function reveals the prizes modal
//when the gray area around the modal gets clicked/touched, this function hides the prizes modal

// function hideOtherPages() {
//   let y = document.getElementsByClassName("content");
//   for (i = 0; i < y.length; i++) {
//     // if (classlist does not contain no-display) {
//     y[i].classList.toggle("no-display");
//     // }
//   }
// }

//hides nav after clicking a menu item
function mobNavButton() {
  let x = document.getElementById("nav-container");
  x.classList.toggle("no-display");
}

//hides any pages that are open
function resetPages() {
  let y = document.getElementsByClassName("content");
  for (i = 0; i < y.length; i++) {
    if (y[i].classList.contains("no-display") === false) {
      y[i].classList.toggle("no-display");
    }
  }
}

function showHome() {
    let x = document.getElementById("home");
    resetPages();
    x.classList.toggle("no-display");
    mobNavButton();
}

function showProfile() {
  let x = document.getElementById("profile");
  resetPages();
  x.classList.toggle("no-display");
  mobNavButton();
}

function showAbout() {
  let x = document.getElementById("about");
  resetPages();
  x.classList.toggle("no-display");
  mobNavButton();
}

function showFaq() {
  let x = document.getElementById("faq");
  resetPages();
  x.classList.toggle("no-display");
  mobNavButton();
}

// function todayPollModal() {
//   let x = document.getElementById("today-poll-modal"); 
//   x.classList.toggle("no-display");
//   fixPages();
// }