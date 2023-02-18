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

if(idTarea===0){
    agregarTareas.innerHTML= `<h1> No existen tareas - Puede agregar </h1>`
}

function agregarTarea(){
    let titulo= title.value
    let descripcion= Description.value
    console.log(lengthImg + " " + titulo + " " + descripcion)
    
    if(lengthImg>=1&&titulo!=""&&descripcion!=""){
        if(idTarea==0){
           agregarTareas.innerHTML= `<div class='col-md-4 card'>
            <div>
            <img height='150' src=${imgDefault}
            <h2>${titulo}</h2>
            <p>${descripcion}</p>             
            </div>   
           </div>`
        }else{
            agregarTareas.innerHTML+= `<div class='col-md-4 card'>
            <div>
            <img height='150' src=${imgDefault}
            <h2>${titulo}</h2>
            <p>${descripcion}</p>             
            </div>   
           </div>`  
        }
        idTarea++
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
}

imagenTaskDefault.addEventListener("change", (e) => {
  lengthImg= e.target.files.length
  imgDefault= URL.createObjectURL(e.target.files[0])
  imgMuestra.style.height= '100px'
  imgMuestra.style.width= '130px'
  imgMuestra.src= URL.createObjectURL(e.target.files[0])
})

