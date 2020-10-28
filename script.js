function initalize(){
  document.getElementById("check").checked = true;
}
function toggleChange(){
  if(document.getElementById("nav2").style.display=="flex"){
    document.getElementById("nav2").style.display="none";
  }else{
    document.getElementById("nav2").style.display="flex";
  }
}
function change(){
  if(document.getElementById("check").checked == true){
    document.getElementById("fourth").style.display="flex";
    document.getElementById("fourth2").style.display="none";
    document.getElementById("check").checked == false;
    document.getElementById("recentTitle").innerHTML="Recent Projects!"
  }else{
    document.getElementById("fourth2").style.display="flex";
    document.getElementById("fourth").style.display="none";
    document.getElementById("check").checked == true;
    document.getElementById("recentTitle").innerHTML="Recent Blogs!"
  }
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  /*--for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";
}

function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = (w / 30) + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w/30 ) - (slider.offsetWidth/2) + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e)
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}
function changeLike(num){
  if(document.getElementById("like"+num).style.color=="red"){
    document.getElementById("like"+num).style.color="black";
  }else{
    document.getElementById("like"+num).style.color="red";
  }
}
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset-10 >= sticky) {
    navbar.classList.add("sticky")
    document.getElementById("nameNav").style.display="inline-flex";
    document.getElementById("logo").style.display="none";

  } else {
    navbar.classList.remove("sticky");

    document.getElementById("logo").style.display="inline-flex";
    document.getElementById("nameNav").style.display="none";
  }
}
function relocate(){
  location.replace("project.html")
}
function relocate2(){
  location.replace("about.html")
}
function relocate3(num){
  if(num==1){
    window.open("https://github.com/NikhilPrajith/1-EncodeDecode/blob/master/encryter.py");
  }
  if(num==  2){
    window.open("https://github.com/NikhilPrajith/1-CalculatorJava/blob/master/calculate.java");
  }
  if(num==3){
    window.open("https://github.com/NikhilPrajith/PrepCodeProjects/tree/master/Nikhil_Level2%20Project");
  }
  if(num==4){
    window.open("https://github.com/NikhilPrajith/PrepCodeProjects/blob/master/Nikhil_Guessing%20Game/GuessingGame.java");
  }
  if(num==5){
    window.open("https://github.com/NikhilPrajith/MovieRecommendation/blob/main/main.py")
  }
  if(num==6){
    window.open("https://github.com/NikhilPrajith/TypingTest");
  }
}
