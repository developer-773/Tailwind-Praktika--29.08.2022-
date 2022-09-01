const navbar = document.querySelector(".toggle-btn");
var main = document.querySelector(".hero");
var nav = document.getElementById("nav");
var head = document.querySelector(".header");
var list = document.querySelector(".sitenav");
var lnks = nav.getElementsByClassName("sitenav__link")[0];
navbar.addEventListener("click" , function(){
  head.classList.toggle("sitenav-on");
  main.classList.toggle("linear");
  document.body.classList.toggle("overflow")

});


