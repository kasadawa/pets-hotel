const _SERVER = 'http://localhost:3000';

function registerAction(){
    var email = document.getElementById('email').value; 
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;    
    var password = document.getElementById('password').value;

    if(validateEmail(email) === true){
            $.ajax({
                method:"POST",
                url: _SERVER + '/register',
                data: { email,address,phone, password}
            })
            .done( (res)=> {
                alert(res.message)
            })

        }else{
            alert('Please check your email');
        } 
}   

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
