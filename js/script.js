
// Creamos el div contenedor de todos los cuadros, asignandole la clase grid, con display flex y flex direction row

const grid = document.querySelector(".grid");
grid.style.cssText = `width: 800px; height: 800px; display: flex; flex-direction: row; flex-wrap: wrap;`;
// Crear los 16 divs para una fila y repetir eso para las 16 filas

for (let alto = 0; alto < 16; alto++) {     
    let divFila = document.createElement("div");
    // divFila.style.cssText = "display: flex";
    for (let ancho = 0; ancho < 16; ancho++) {
        const cuadrado = document.createElement("div");
        cuadrado.classList.add("cuadro");
        cuadrado.style.cssText = "background-color: orange; width: 50px; height: 50px; box-sizing: border-box; border: chocolate solid 1px";
        let click = false;
        cuadrado.addEventListener("mouseover",()=>{
            if(!click){
                cuadrado.style.backgroundColor = "red";
            }
        });
        cuadrado.addEventListener("click", () =>{
            cuadrado.style.backgroundColor = "red";
            click = true;
        }); 
        cuadrado.addEventListener("mouseout",()=>{
            if (!click) {
                cuadrado.style.backgroundColor = "orange";
            }
        });
        divFila.appendChild(cuadrado);
    }
    grid.appendChild(divFila);
}

function numeroCuadrados(){
    let numero = parseInt(prompt("¿De cuantos cuadrados por lado quieres la grilla?",16));
    if (numero < 16 || numero > 100) {
        numeroCuadrados();
    }
    return numero
}

function calcularAnchoAltoGrilla(numeroCuadrados = 16){
    return altoAncho = (800/numeroCuadrados);
}

// Seleccionamos el boton con clase btnNumCuadrado y le asignamos el evento para mostrar un prompt con el tamaño de la grilla a crear

const btnGrilla = document.querySelector("#btnNumCuadrados");

btnGrilla.addEventListener("click", () => {
    const num = numeroCuadrados();
    const altoAncho = calcularAnchoAltoGrilla(num);
    removerGrid();
    crearGrid(altoAncho, num);
});

function removerGrid(){
    const contenedor = document.querySelector(".contenedor");
    const grid = document.querySelector(".grid");
    contenedor.removeChild(grid);
}
function crearGrid(altoAncho,num){
    const contenedor = document.querySelector(".contenedor");
    const nuevoGrid = document.createElement("div");
    nuevoGrid.classList.add('grid');
    nuevoGrid.style.cssText = `width: 800px; height: 800px; display: flex; flex-direction: row; flex-wrap: wrap;`;
    for (let alto = 0; alto < num; alto++) {
        let divFila = document.createElement("div");
        for (let ancho = 0; ancho < num; ancho++) {
            const cuadrado = document.createElement("div");
            cuadrado.classList.add("cuadro");
            cuadrado.style.cssText = `background-color: orange; width: ${altoAncho}px; height: ${altoAncho}px ; box-sizing: border-box; border: chocolate solid 1px`;
            let click = false;
            cuadrado.addEventListener("mouseover",()=>{
                if(!click){
                    cuadrado.style.backgroundColor = "red";
                }
            });
            cuadrado.addEventListener("click", () =>{
                cuadrado.style.backgroundColor = "red";
                click = true;
            }); 
            cuadrado.addEventListener("mouseout",()=>{
                if (!click) {
                    cuadrado.style.backgroundColor = "orange";
                }
            });
            // Si el evento de click ocurre el mouseout se desactiva para ese cuadro
            divFila.appendChild(cuadrado);
        }
        nuevoGrid.appendChild(divFila);
    }
    contenedor.appendChild(nuevoGrid);
}


// Seleccionar siempre el mismo div con la clase grid y crear dentro 