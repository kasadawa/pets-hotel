"use strict";

function mouseOver() {
	this.style.background = "#ff3232";
}
function mouseOut() {
	this.style.background = "transparent";
}

function randomImg(){
    var randomNumber = Math.floor(Math.random()*7) + 1;
    var imgName = randomNumber + ".jpg";
    var pageName = randomNumber + ".html";
    document.getElementById("image").src = "css/images/" + imgName ;
    document.getElementById("learnMore").href = pageName;
}
window.onload = randomImg();

document.getElementById("more").addEventListener("mouseover", mouseOver);
document.getElementById("more").addEventListener("mouseout", mouseOut);
