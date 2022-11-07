function request(){
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    .then(function(response){
        return response.json()
    })
    .then((response) =>{
        console.log(response) 
        let resultado = document.querySelector('#show');
        resultado.innerHTML = `ID: ${response.userId} - Título${response.title}`
    })
}