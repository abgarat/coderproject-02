function agregarProductos(cantidad){
    for(let i = cantidad; i > 0; i--){
        let productoNombre = prompt('Ingrese el nombre del producto:');
        let productoPrecio = Number(prompt('Ingrese el precio del producto:'));
        while(isNaN(productoPrecio)){
            productoPrecio = Number(prompt('Ingrese el precio del producto en números:'));
        }
        console.log('Usted ingresó ' + productoNombre + 'con un valor de $' + productoPrecio + 'por unidad.')
    }
}

function definirCantProd(){
    let n = Number(prompt('Ingrese la cantidad de productos distintos que desea agregar al sitio:'));
    while(isNaN(n)){
        alert('Ingrese la cantidad escrita en números.');
        n = Number(prompt('Ingrese la cantidad de productos distintos que desea agregar al sitio:'));
    }
    return n;
}

let cantidadProductos = definirCantProd();

agregarProductos(cantidadProductos);