var header = document.getElementById("header");
var m1 = document.getElementById("chiron");
var m2 = document.getElementById("divo");
var m3 = document.getElementById("cent");
var m4 = document.getElementById("la");
var model = document.getElementById("model");

var start = document.getElementById('start');
var speed = document.getElementById("speed");
var engine = document.getElementById("engine");

var logo = document.getElementById("logo");


m1.onclick = function(){
    header.style.backgroundImage = "url(images/divo.jpg)";
    model.innerHTML = "Divo";
    start.innerHTML = "2.4s";
    speed.innerHTML = "304 mph";
    engine.innerHTML = "8L W16";
    logo.src = "images/logo.png";
}
m2.onclick = function(){
    header.style.backgroundImage = "url(images/rf1.jpg)";
    model.innerHTML = "LaFerrari";
    start.innerHTML = "3s";
    speed.innerHTML = "217 mph";
    engine.innerHTML = "6.3L V12";
    logo.src = "images/f1.png";
}
m3.onclick = function(){
    header.style.backgroundImage = "url(images/l1.jpg)";
    model.innerHTML = "Aventador SVJ";
    start.innerHTML = "2.8s";
    speed.innerHTML = "220 mph";
    engine.innerHTML = "6.5L V12";
    logo.src = "images/Lamborghini.png";
}
m4.onclick = function(){
    header.style.backgroundImage = "url(images/mm1.jpg)";
    model.innerHTML = "SpeedTail";
    start.innerHTML = "2.5s";
    speed.innerHTML = "250 mph";
    engine.innerHTML = "4L TT V8";
    logo.src = "images/mmm1.png";
}

