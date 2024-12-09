function openNav() {
  var x = document.getElementById("nav-bar");
  var y = document.getElementById("main-content");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";

  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

