function request(){
    let number = document.getElementById('inputApi').value
    console.log(number);
    fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
    .then(function(response){
        return response.json()
    })
    .then((response) =>{
        console.log(response) 
        let resultado = document.querySelector('#show');
        resultado.innerHTML = `ID: ${response.id} - Título${response.title}`
    })
}