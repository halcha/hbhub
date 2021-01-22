function dropDown(x) {
    x.nextElementSibling.classList.toggle("no-display");
    x.nextElementSibling.classList.toggle("block-display");
    x.lastElementChild.classList.toggle("chevron-invert");
  }

  function selfDropDown(x) {
    x.classList.toggle("no-display");
    x.classList.toggle("block-display");
    x.previousElementSibling.lastElementChild.classList.toggle("chevron-invert");
  }