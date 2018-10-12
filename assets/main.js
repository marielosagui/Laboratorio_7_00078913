var container = document.getElementById("c1")
container.innerText="Hola Mundo";
container.style.backgroundColor= "#000000";
container.style.color="#1cb723";
container.style.width="200px";
container.style.height="200px";
container.innerHTML = "<input type='text' placeholder='Escriba su text'>";

var containers= document.getElementsByClassName("c2");
container.forEach(function(element){
    element.style.backgroundColor="009999";
});

container.forEach(function(element){
    element.innerHTML ="<input type='text' placeholder ='Escriba su texto'>";
});

var boton= document.getElementById("btn-click");
boton.onclick=function(evt){
    alert("Hola Mundo");
};

var btnCopy=document.getElementById("btnCopy");
btnCopy.onclick =function(evt){
    let msj = document.getELementById('textMsj').value;
    document.getElementById('showMsj').innerText=msj;
}
