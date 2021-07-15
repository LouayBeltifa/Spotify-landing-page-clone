
function myFunction() {
  var x = document.getElementById("nav-bar");
  if (x.className === "nav-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-links";
  }
}