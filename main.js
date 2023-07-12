/*function saludar(nombre){
console.log("hola" + nombre)
}
saludar("juan")*/
/*
function comprarbebida(dinero){
const preciobebida = 2.5
if(dinero > preciobebida){
    let cambio = dinero - preciobebida
    return "compra realizada, gracias! este es tu cambio $" + cambio
} else{
    let dinerofaltante = preciobebida -dinero
    return "Dinero faltante" + dinerofaltante
}
}*/
function comprarBebida() {
  const productos = [
    { nombre: "coca", precio: 2.5 },
    { nombre: "papas", precio: 3.0 },
    { nombre: "gomitas", precio: 2.0 },
    { nombre: "sprite 4", precio: 2.8 }
  ];
  let continuar = true;

  while (continuar) {
    let opciones = "";
    for (let i = 0; i < productos.length; i++) {
      opciones += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio.toFixed(2)}\n`;
    }
    opciones += `${productos.length + 1}. Salir`;

    let eleccion = parseInt(prompt(`Seleccione una opción:\n${opciones}`));

    if (isNaN(eleccion) || eleccion < 1 || eleccion > productos.length + 1) {
      alert("Seleccione una opción válida.");
      continue;
    }

    if (eleccion === productos.length + 1) {
      continuar = false;
      continue;
    }

    let productoSeleccionado = productos[eleccion - 1];
    let precioProducto = productoSeleccionado.precio;

    alert(`Ha seleccionado ${productoSeleccionado.nombre} - $${precioProducto.toFixed(2)}`);

    let dinero = parseFloat(prompt("Ingrese la cantidad de dinero:"));

    if (isNaN(dinero)) {
      alert("Ingrese un número válido.");
      continue;
    }

    if (dinero >= precioProducto) {
      let cambio = dinero - precioProducto;
      alert(`Compra realizada, ¡gracias! Este es tu cambio: $${cambio.toFixed(2)}`);
    } else {
      let dineroFaltante = precioProducto - dinero;
      alert(`Dinero faltante: $${dineroFaltante.toFixed(2)}`);
    }

    let respuesta = prompt("¿Desea comprar algo más? (si/no)").toLowerCase();
    while (respuesta !== "sí" && respuesta !== "no") {
      respuesta = prompt("Ingrese una respuesta válida. ¿Desea comprar algo más? (si/no)").toLowerCase();
    }

    if (respuesta === "no") {
      continuar = false;
    }
  }
}

comprarBebida();