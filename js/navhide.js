/* navbar scroll effect */

var prevPosition = window.pageYOffset;

window.onscroll = function() {

  var currentPosition = window.pageYOffset;

  if (currentPosition == 0) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }

  prevPosition = currentPosition;
}

