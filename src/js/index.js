const boton = document.getElementById("addLi");
const lista = document.getElementById("contenedor");
const texto=document.getElementById("entrada");
const formulario=document.getElementById("formulario");
const alerta=document.getElementById("alerta");

formulario.addEventListener("submit",e=>{
  e.preventDefault();
  agregar();
})


const agregar = e=> {
  const elemento =  document.createElement("li");
  const eli =  document.createElement("button");
  const edi =  document.createElement("button");
  elemento.textContent = texto.value;
  eli.textContent=`X`;
  edi.textContent=`Editar`;


  if(texto.value.length<=0){
    alerta.innerHTML=("¡Advertencia! No se permite añadir una lista vacía");
  }else{
    eli.onclick= e =>{
      elemento.remove();
      alerta.innerHTML=("");
    }
    edi.onclick= e =>{
      var ntext=prompt("Editar texto de la lista seleccionada","");
      if(ntext.length<=0){
        alerta.innerHTML=("No se puede dejar vacio el elemento");  
      }else{
        elemento.textContent=ntext;
        elemento.appendChild(eli);
        elemento.appendChild(edi);
        alerta.innerHTML=("");
      }
    }
    alerta.innerHTML=("");
    elemento.appendChild(eli);
    elemento.appendChild(edi);
    lista.appendChild(elemento);
  }
  texto.value="";
}