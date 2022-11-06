
function login(){ 
    const user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    if (email.length < 3 || password.length < 3) {
        alert("Email/Senha deve ter mais que 3 dígitos!")
    } else {
        const req = new XMLHttpRequest();
        req.open('POST', 'https://reqres.in/api/login', true);
                
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(user));
        req.addEventListener('load', function() {
        if (req.readyState === 4 && req.status === 200) {
            //const res = JSON.parse(req.responseText);
            var token = (JSON.parse(this.responseText).token);
            //console.log(res);
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
        }else{
            document.getElementById('login').style.display = 'block';
            document.getElementById('logado').style.display = 'none';
        }
    }
    autenticacao();       
    }
}
    




//"email": "eve.holt@reqres.in",     "password": "cityslicka"