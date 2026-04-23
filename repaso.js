function mostrar(opcion) {
  switch (opcion) {
    case 1:
      ejercicio1();
      break;
    case 2:
      imprimirCentenas();
      break;
    case 3:
      imprimircentenasRegresivo();
      break;
    case 4:
      mostrarMensaje1("Aprendiendo ciclos for");
      break;
    case 5:
      mostrarMensaje2("JavaScript es potente");
      break;
    case 6:
      mostrarMensaje3("Iteración completada");
      break;
    case 7:
      mostrarMensaje4("Ciclo descendente");
      break;
    case 8:
      imprimirTabla3(10);
      break;
    default:
      console.log("Opción no válida");
      break;
  }
}

function ejercicio1() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

function imprimirCentenas() {
  for (let i = 100; i <= 1000; i += 100) {
    console.log(i);
  }
}

function imprimircentenasRegresivo() {
  for (let i = 1000; i >= 800; i -= 100) {
    console.log(i);
  }
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
    console.log("error, cantidad no válida.");
    return;
  }

  for (let i = 1; i <= cantidad; i++) {
    let resultado = 3 * i;
    console.log(`3 x ${i} = ${resultado}`);
  }
}