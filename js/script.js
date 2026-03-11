function menu() {
  var x = document.getElementById("nav-links");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function showAnswer(num) {
  document.getElementById("a1").style.display = "none";
  document.getElementById("a2").style.display = "none";
  document.getElementById("a3").style.display = "none";

  document.getElementById("a" + num).style.display = "block";
}
