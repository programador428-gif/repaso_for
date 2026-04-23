function mostrar(opcion) {
  switch (opcion) {
    case 1:
      ejercicio1();
      break;
    case 2:
      ejercicio2();
      break;
    case 3:
      ejercicio3();
      break;
      defaul:
      break;
  }
}

function ejercicio1() {
  for (let i = 1; i <= 5; i++)
    console.log(i);
}

function ejercicio2() {
  for (let i = 100; i <= 1000; i += 100)
    console.log(i);
}

function ejercicio3() {
  for (let i = 1000; i >= 800; i -= 100)
    console.log(i);
}

function mostrarMensaje1(mensaje) {
  for (let i = 5; i < 8; i++) {
    console.log(mensaje);
  }
}

function mostrarMensaje2(mensaje) {
  for (let i = 10; i >= 8; i--) {
    console.log(mensaje);
  }
}

function mostrarMensaje3(mensaje) {
  for (let i = 0; i < 3; i++) {
    console.log(mensaje);
  }
}

function mostrarMensaje4(mensaje) {
  for (let i = 8; i > 5; i--) {
    console.log(mensaje);
  }
}

function imprimirTabla3(cantidad) {
  if (!cantidad || cantidad < 0 || cantidad > 100) {
    console.log("error, cantidad no validad.");
    return
  }
  let vuelta = 0;
  let resultado = 0;

  for (let i = 1; i <= cantidad; i++) {
    vuelta++;
    resultado = 3 * i;
    console.log(`3 x ${vuelta} = ${resultado}`);
  }
}

imprimirTabla3(10);