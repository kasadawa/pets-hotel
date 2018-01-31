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
            .done( (response)=> {
                console.log(response)
            })

        }else{
            alert('Please check your email');
        } 
}   

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
