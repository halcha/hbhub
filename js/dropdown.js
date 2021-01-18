function dropDown(x) {
    x.nextElementSibling.classList.toggle("no-display");
    x.nextElementSibling.classList.toggle("block-display");
    x.lastElementChild.classList.toggle("chevron-invert");
  }