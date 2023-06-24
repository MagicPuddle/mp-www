/* Toggle between adding and removing the "responsive" class to 
  nav when the user clicks on the icon */
function menuOpen() {
    var x = document.getElementById("nav-menu");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }