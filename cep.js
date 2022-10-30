const cepInput = document.querySelector("#cep");
const addressForm = document.querySelector("#address-form");
const addressInput = document.querySelector("#lougradouro");
const cityInput = document.querySelector("#uf");
const neighborhoodInput = document.querySelector("#bairro");
const regionInput = document.querySelector("#localidade");
const formInputs = document.querySelectorAll("[data-input]");


// Validate CEP Input
cepInput.addEventListener("keypress", (e) => {
  const onlyNumbers = /[0-9]|\./;
  const key = String.fromCharCode(e.keyCode);
 
// Apenas números
if(!onlyNumbers.test(key)){
    e.preventDefault();
    return;
    }
});

// Get endereco
cepInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;

// Verificar tamanho
    if(inputValue.length === 8){
        getAddress(inputValue);
    }
})

// Pegar o endereço pelo API
    const getAddress = async(cep) => {
        cepInput.blur();
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }


    /*function consultaEndereco(){
        let cep = document.querySelector('#cep').value;

        if(cep.length !== 8){
            alert('informação invalida');
            return;
        }
        let url = `viacep.com.br/ws/${cep}/json/`;

        fetch(url).then(function(response){
            response.json().then(function(data){
                console.log(data);
                mostrarEndereco(data);
            })
        });
    }
    function mostrarEndereco(dados){
        let resultado = document.querySelector('#resultado');
        if(dados.erro){
            resultado.innerHTML = "Não foi possivel localizar o endereco desejado!"
        }else{
            resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                                    <p>Complemento: ${dados.complemento}</p>
                                    <p>Bairro: ${dados.bairro}</p>
                                    <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`
        }
        
    }*/

    