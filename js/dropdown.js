function dropDown(x) {
    x.nextElementSibling.classList.toggle("dropdown-close");
    x.nextElementSibling.classList.toggle("dropdown-open");
    x.lastElementChild.classList.toggle("chevron-invert");
  }