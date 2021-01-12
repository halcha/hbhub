function showPass(y) {
    var x = y.previousElementSibling;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }