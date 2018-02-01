const _SERVER = 'http://localhost:3000';

function loginAction(){
    var email = document.getElementById('email').value; 
    var password = document.getElementById('password').value;
    
    if(validateEmail(email) === true){
        $.ajax({
            method:"POST",
            url: _SERVER + '/login',
            data: { email, password}
        })
        .done( (res)=> {
            if(!!res.success){
                    window.localStorage.setItem('logged', 'true');
                    window.localStorage.setItem('login-email', res.info.email);
                    window.localStorage.setItem('login-phone', res.info.phone);
                    window.localStorage.setItem('login-email', res.info.address);
                    window.location.replace(_SERVER);
                }else{
                    alert('Wrong email/password combination')
                }

            })

        }else{
            alert('Please check your email');
        } 
}   

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
