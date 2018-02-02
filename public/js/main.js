"use strict";
const _SERVER = 'http://localhost:3000';

window.onload = ()=>{
    let loginTrigger = window.localStorage.getItem('logged');
    if(!!loginTrigger){
        let loginDiv = document.getElementsByClassName('loginButton');
        loginDiv[0].style.display = "none";
        let logoutDiv = document.getElementsByClassName('logoutDiv');
        logoutDiv[0].style.display = "block";
    }
}


function logout(e){
    e.preventDefault();
    window.localStorage.removeItem('logged');
    window.localStorage.removeItem('login-email');
    window.localStorage.removeItem('login-address');    
    window.localStorage.removeItem('login-phone');
    window.location.replace(_SERVER);
}