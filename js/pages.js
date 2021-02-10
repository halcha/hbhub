function hideCurrentPage() {
    let x = document.getElementById("nav-container");
    x.classList.toggle("nav-display");
    let y = document.getElementsByClassName("content");
    for (i = 0; i < y.length; i++) {
        if(y[i].classList.contains("no-display") === false) {
            y[i].classList.toggle("no-display");
        }
    }
  }

  function showPage(p) {
    hideCurrentPage();
    let q = p.getAttribute('pid');
    let x = document.getElementById(q); 
    x.classList.toggle("no-display");
  }