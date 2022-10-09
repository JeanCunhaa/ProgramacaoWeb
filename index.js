var imgConteudo = document.querySelector("#imgConteudo");
function (){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "", true);
    xmlhttp.onreadystatechange = function (){
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
            imgConteudo.innerHTML = xmlhttp.responseText;
    };
    xmlhttp.send();
}