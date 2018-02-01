"use strict";
window.onload = () => {

    let loginTrigger = window.localStorage.getItem('logged');
    if (!!loginTrigger) {

        let loginDiv = document.getElementsByClassName('loginButton');
        loginDiv[0].style.display = "none";
        let logoutDiv = document.getElementsByClassName('logoutDiv');
        logoutDiv[0].style.display = "block";


        let email = window.localStorage.getItem('login-email');
        let phone = window.localStorage.getItem('login-phone');
        let address = window.localStorage.getItem('login-address');

        document.getElementById('email').innerHTML = email;
        document.getElementById('phone').innerHTML = phone;
        document.getElementById('address').innerHTML = address;

        $.getJSON('//freegeoip.net/json/?callback=?', function (data) {
            document.getElementById('ip').innerHTML = data.ip;
        });
    }else{
        document.getElementById('profileTitle').innerHTML = "Please log in into your account";
        document.getElementById('infoTable').style.display = 'none';
    }
}

