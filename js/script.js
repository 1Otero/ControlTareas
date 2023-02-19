var imagenTaskDefault= document.getElementById("file")
var title= document.getElementById("title")
var Description= document.getElementById("Description")
var agregarTareas= document.getElementById("newImg")
var message= document.getElementById("message")
var imgMuestra= document.getElementById("muestraImg")

var tareas= []
var lengthImg= 0
var idTarea= 0
var imgDefault;
message.style.display= 'none'

function pintarDatos(){
    console.log(tareas.length)
    console.log(tareas)
    if(tareas.length > 0){
        tareas.forEach(e => {
            console.log(e)
            agregarTareas.innerHTML= `<div class='col-md-3 card'>
            <div>
            <img height='150' src=${imgDefault}
            <h2>${e.titulo}</h2>
            <p>${e.description}</p>             
            <input type='button' onClick='eliminarTarea(${e.id})' value="Eliminar tarea"/>
            </div>   
           </div>`
        })
    }else{
        agregarTareas.innerHTML= `<h1> No existen tareas - Puede agregar </h1>`
    }
}

if(idTarea===0){
    agregarTareas.innerHTML= `<h1> No existen tareas - Puede agregar </h1>`
}else{
    pintarDatos()
}
function eliminarTarea(id){
    tareas= tareas.filter(e => { return e.id != id})
    console.log(tareas)
    pintarDatos()
}
function pintarHtml(tituloP,descriptionP,IdElimina){
  console.log(IdElimina)
  return `<div class='col-md-3 card'>
  <div>
  <img height='150' src=${imgDefault}
  <h2>${tituloP}</h2>
  <p>${descriptionP}</p>             
  <input type='button' onClick='eliminarTarea(${IdElimina})' value="Eliminar tarea"/>
  </div>   
 </div>`
}
function agregarTarea(){
    let titulo= title.value
    let descripcion= Description.value
    console.log(lengthImg + " " + titulo + " " + descripcion)
    
    if(lengthImg>=1&&titulo!=""&&descripcion!=""){
        var idEliminar= idTarea
        if(tareas.length==0){
           agregarTareas.innerHTML= pintarHtml(titulo,descripcion,idEliminar)
        }else{
            agregarTareas.innerHTML+= pintarHtml(titulo,descripcion,idEliminar)
        }
        tareas.push({"id":idTarea,"img": imgDefault,"titulo":titulo,"description":descripcion})
        
        message.innerHTML= `<h1>Agrego tarea</h1>`        
        message.classList.add('btn')
        message.style.backgroundColor= 'green'
        message.style.color= 'white'
        message.style.display= 'block'
        title.value= ''
        Description.value= ''
    }else{
       message.innerHTML= `<h1>Error con los campos</h1>`       
       message.style.backgroundColor= 'red'
       message.style.color= 'white'
       message.style.display= 'block'
    }
    setTimeout(() => {
       message.innerHTML= `` 
       message.style.display= 'none'
    }, 1500)
    idTarea++
}

imagenTaskDefault.addEventListener("change", (e) => {
  lengthImg= e.target.files.length
  imgDefault= URL.createObjectURL(e.target.files[0])
  imgMuestra.style.height= '100px'
  imgMuestra.style.width= '130px'
  imgMuestra.src= URL.createObjectURL(e.target.files[0])
})

