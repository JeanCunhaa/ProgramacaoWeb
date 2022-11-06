function login(){ 
    const user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    if(password.value == '' || password.value == null || password.value.length <= 3 || email.value.length <= 3 || email.value == null || email.value == ''){
        document.getElementById('errorLogin').style.display = 'block';
    } else {
        const req = new XMLHttpRequest();
        req.open('POST', 'https://reqres.in/api/login', true);
                
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(user));
        req.addEventListener('load', function() {
        if (req.readyState === 4 && req.status === 200) {
            
            var token = (JSON.parse(this.responseText).token);
            
            localStorage.setItem("token", token);
            autenticacao();
        } else {
            console.log("Request error");
        }
        });
    
    function autenticacao(){
        if (localStorage.getItem('token') != null && localStorage.getItem('token') != "undefined"){
            document.getElementById('login').style.display = 'none';
            document.getElementById('logado').style.display = 'block';
            document.getElementById('errorLogin').style.display = 'none';
        }else{
            document.getElementById('login').style.display = 'block';
            document.getElementById('logado').style.display = 'none';
        }
    }
    autenticacao();
    }
}
    




//"email": "eve.holt@reqres.in",     "password": "cityslicka"