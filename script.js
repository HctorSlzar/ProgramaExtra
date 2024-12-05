//Boton1 (Metodo Burbuja)
function ordenarBurbuja() {
    let tamano = prompt("Ingrese el tamaño de la lista:");
    if (!/^[0-9]+$/.test(tamano)) {
        alert("Por favor, ingrese solo números.");
        return;
    }
    let lista = [];

    for (let i = 0; i < tamano; i++) {
        let numero = prompt(`Ingrese el número ${i + 1}:`);
        if (!/^[0-9]+$/.test(numero)) {
            alert("Por favor, ingrese solo números.");
            return;
        }
        lista.push(parseInt(numero));
    }

    let tipoOrden = prompt("¿Desea ordenar la lista en forma ascendente o descendente? (ascendente/descendente)");
    if (tipoOrden !== "ascendente" && tipoOrden !== "descendente") {
        alert("Por favor, ingrese 'ascendente' o 'descendente'.");
        return;
    }

    for (let i = 0; i < lista.length - 1; i++) {
        for (let j = 0; j < lista.length - i - 1; j++) {
            if ((tipoOrden === "ascendente" && lista[j] > lista[j + 1]) ||
                (tipoOrden === "descendente" && lista[j] < lista[j + 1])) {
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }

    alert(`Lista ordenada (${tipoOrden}): ${lista}`);
}

//Boton2 (Nombres)
function ordenarNombres() {
    let nombres = [];

    for (let i = 0; i < 5; i++) {
        let nombre = prompt(`Ingrese el nombre ${i + 1}:`);
        if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            alert("Por favor, ingrese solo letras.");
            return;
        }
        nombres.push(nombre);
    }

    nombres.sort();

    let resultado = nombres.map(nombre => `${nombre} (${nombre.length} letras)`).join("\n");
    alert(`Nombres ordenados alfabéticamente:\n${resultado}`);
}

//Boton3 (Ecuación)
function operacionNumeros() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let num3 = prompt("Ingrese el tercer número:");

    if (!/^[0-9]+$/.test(num1) || !/^[0-9]+$/.test(num2) || !/^[0-9]+$/.test(num3)) {
        alert("Ingresar solo números.");
        return;
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    let resultado = (num1 * num2) + num3;
    alert(`El resultado de (${num1} * ${num2}) + ${num3} es: ${resultado}`);
}

