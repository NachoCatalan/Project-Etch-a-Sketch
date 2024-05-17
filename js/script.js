
// Creamos el div contenedor de todos los cuadros, asignandole la clase grid, con display flex y flex direction row

const body = document.querySelector("body");
const div = document.createElement("div");
div.classList.add("grid");
div.style.display = "flex";
div.style.flexDirection = "row";
div.style.flexWrap = "wrap";
div.style.cssText = "width: 800px; heigth:800px"
body.appendChild(div);

// Crear los 16 divs para una fila y repetir eso para las 16 filas

for (let alto = 0; alto < 16; alto++) {
    const grid = document.querySelector(".grid");
    let divFila = document.createElement("div");
    divFila.style.cssText = "display: flex";
    for (let ancho = 0; ancho < 16; ancho++) {
        const cuadrado = document.createElement("div");
        cuadrado.classList.add("cuadro");
        cuadrado.style.cssText = "background-color: orange; width: 50px; height: 50px; box-sizing: border-box; border: red solid 1px";
        cuadrado.addEventListener("mouseover",()=>{
            cuadrado.style.backgroundColor = "red";
            cuadrado.style.transitionDuration = "0.05s";
        })
        cuadrado.addEventListener("mouseout",()=>{
            cuadrado.style.backgroundColor = "orange";
            cuadrado.style.transitionDuration = "0.05s";
        })
        
        divFila.appendChild(cuadrado);
    }
    grid.appendChild(divFila);
}



