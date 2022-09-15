




class Productos {
    constructor ( nombre, precio, cantidad ) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    }
}



const azucar = new Productos ( "azucar", 130, 20);
const sal = new Productos ("sal", 150, 13);
const pan = new Productos ("pan", 200, 30);
const yogurt = new Productos ("yogurt", 70, 16);
const leche = new Productos ( "leche", 100, 10);
const manteca = new Productos ( "manteca", 280, 30)

const arrayProductos = [];

arrayProductos.push(leche)
arrayProductos.push(azucar)
arrayProductos.push(sal)
arrayProductos.push(pan)
arrayProductos.push(yogurt)
arrayProductos.push(manteca)

console.log(arrayProductos)


function menu(){
    alert("Éste es un simulador de registro de stock, en el cual podrá interactuar con un stock de productos predeterminado.")
    let opcion = parseInt(prompt("Bienvenido \nIngrese una opción: \n  1) Añadir un producto \n  2) Eliminar un producto \n  3) Cambiar Precio \n  4) Cambiar Stock \n  5) Consultar producto  \n  6) Salir del simulador"));
    return opcion;
}

function agregarProducto(){
    let nombre = prompt("Ingrese el nombre del producto a agregar: ");
    let precio = parseInt(prompt("Ingrese el precio del producto: "))
    let cantidad = parseInt(prompt("Ingrese la cantidad de unidades: "))  
    let nuevoProducto = new Productos (nombre, precio, cantidad)
    arrayProductos.push(nuevoProducto)
    console.log(arrayProductos)
}

function modificarPrecio (){
    let nombrePre = prompt("Ingrese el nombre del producto del cual quiera cambiar de precio: ")
    let producto = arrayProductos.find(Productos => Productos.nombre == nombrePre); 
    let indice = arrayProductos.indexOf (producto)
    let precio = parseInt(prompt( "El precio anterior era de $" + producto.precio + " ¿Cuál es el nuevo precio del producto? "))
    console.log(indice)
    producto.precio = precio;
    console.log(producto)
}

function modificarStock (){
    let nombrePre = prompt("Ingrese el nombre del producto del cual quiera cambiar el stock: ")
    let producto = arrayProductos.find(Productos => Productos.nombre == nombrePre); 
    let indice = arrayProductos.indexOf (producto)
    let stock = parseInt(prompt( "El stock anterior era de " + producto.cantidad + " unidades. ¿Cuántas hay en este momento? "))
    console.log(indice)
    producto.cantidad = stock;
    console.log(producto)
}

function borrarProducto (){
    let nombrePre = prompt("Ingrese el nombre del producto el cual desea eliminar: ")
    let producto = arrayProductos.find(Productos => Productos.nombre == nombrePre); 
    let indice = arrayProductos.indexOf (producto)
    arrayProductos.splice(indice, 1)
    alert("Hemos eliminado: " + producto.nombre)
    console.log(arrayProductos)
}

function verProducto (){
    let nombrePre = prompt("Ingrese el nombre del producto que quiera saber el precio: ")
    let producto = arrayProductos.find(Productos => Productos.nombre == nombrePre); 
    alert("Producto: " + producto.nombre + "\nPrecio: " + producto.precio + "\nCantidad: " + producto.cantidad)
}



// function eliminarProducto(){
//     let nombrePre = prompt("Ingrese el nombre del producto el cual desea eliminar: ")
//     let producto = arrayProductos.find(Productos => Productos.nombre == nombrePre); 
//     let indice = arrayProductos.indexOf (producto)
//     arrayProductos.splice(indice, 1)
//     console.log(arrayProductos)
// }

function salir(){
    alert("Vuelva cuando quiera :)")
}



let elegir = menu()

switch(elegir){
        case 1:
            agregarProducto();
        break;
        case 2:
            borrarProducto();
        break;
        case 3:
            modificarPrecio();
        break;
        case 4:
            modificarStock();
        break;
        case 5:
            verProducto();
        break;
        case 6:
            salir();
        break;
        default:
            alert("Por favor, elija una de las opciones")

}


//agregarProducto()
//modificarPrecio()
//modificarStock()
//borrarProducto()
//verPrecio()
//verStock()
//eliminarProducto()-





