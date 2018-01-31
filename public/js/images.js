"use strict";
var menuItem = document.getElementsByClassName("menuItem");
function mouseOver() {
	this.style.background = "#ff3232";
}
function mouseOut() {
	this.style.background = "transparent";
}
for (var i = 0; i < menuItem.length; i++){
	menuItem[i].addEventListener("mouseover", mouseOver);
	menuItem[i].addEventListener("mouseout", mouseOut);
}