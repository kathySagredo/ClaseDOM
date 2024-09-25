
// con addEventListener
const button = document.querySelector(".button")
button.addEventListener("click", function(){
    const h1 = document.querySelector("h1")
    h1.style.color = "rgb(66, 7, 7)" // "green"
})

// con el atributo onClick
function cambiarContenido(){
const parrafo = document.querySelector("p")
parrafo.textContent = "cambiar contenido"
}

// podemos agregar elementos HTML

const nuevoParrafo = document.createElement("p")
const div = document.querySelector("div")
div.append(nuevoParrafo)
nuevoParrafo.innerHTML = "Este es un nuevo parrafo agregado desde el script"

// podemos eliminar elementos HTML (para ver el contenido el parrafo, comente la linea 23)

// nuevoParrafo.remove()


// sección calcular suma addEventListener
const num = 1
const num2 = 2
const calcular = document.querySelector("#calcular");
calcular.addEventListener("click", function(){
    const resultado = document.createElement("p")
    resultado.setAttribute("class", "numero")
    resultado.innerHTML = `Resultado es: ${num + num2}`
    document.body.append(resultado)
})

// borrar numeros generados con onClick
function borrarElemento(){
    const numeros = document.querySelector(".numero")
    numeros.remove()
}

headers.addEventListener("click",function(){
    console.log("hola")
})

// como crear una etiqueta header clickeable con onClick

function clickeable(){
    const header = document.querySelector("header")
    header.style.background = "green"
    header.style.color = "white"
}



