
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
            const res = JSON.parse(req.responseText);
            console.log(res);
        } else {
            console.log("Request error");
        }
        });
                
    }
}
    




//cityslicka