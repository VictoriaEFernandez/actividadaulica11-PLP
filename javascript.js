//1 . Funcion para calcular el perimetro de un cuadrado
function calcularPerimetroCuadrado(){
    let lado = parseInt(prompt("Ingrese el valor de un lado del cuadrado: "));
    let perimetro = lado * 4;
    alert("El perimetro del cuadrado es: " + perimetro)
}
//2. Funcion para sumar dos numeros y sumar otros dos
function calcularSumayProducto(){
    let num1 = parseInt(prompt("Inrese el primer numero: "));
    let num2 = parseInt(prompt("Inrese el segundo numero: "));
    let num3 = parseInt(prompt("Inrese el tercer numero: "));
    let num4 = parseInt(prompt("Inrese el cuarto numero: "));
    
    let suma  = num1 +num2;
    let producto = num3 * num4;
    
    alert("La suma de los dos primeros numeros es: " + suma);
    alert("El prodcuto del tercer y cuarto numero es: ");
}
// 3. Función para leer cuatro números e informar su suma y producto
function calcularSumaYProductoCuatroNumeros() {
    let a = parseInt(prompt("Ingresa el primer número:"));
    let b = parseInt(prompt("Ingresa el segundo número:"));
    let c = parseInt(prompt("Ingresa el tercer número:"));
    let d = parseInt(prompt("Ingresa el cuarto número:"));

    let sumaTotal = a + b + c + d;
    let productoTotal = a * b * c * d;

    alert("La suma de los cuatro números es: " + sumaTotal);
    alert("El producto de los cuatro números es: " + productoTotal);
}

// 4. Función para calcular el total a pagar
function calcularTotalPagar() {
    let precio = parseInt(prompt("Ingresa el precio del artículo:"));
    let cantidad = parseInt(prompt("Ingresa la cantidad que lleva el cliente:"));

    let total = precio * cantidad;

    alert("El total a abonar por el comprador es: " + total);
}
//5. Funcion con uso de variables
function Variables(){
    let nombre = prompt("Ingresa el nombre: ");
    let sueldo = parseInt(prompt("Ingresa el sueldo: "));
    document.write("Hola " + nombre);
    document.write("Tu sueldo es de: " + sueldo)
}
//6. Funcion para ver el promedio de Notas
function notasAlumno(){
    let nota1 = parseInt(prompt("Ingrese nota 1: "));
    let nota2 = parseInt(prompt("Ingrese nota 2: "));
    let nota3 = parseInt(prompt("Ingrese nota 3: "));
    let promedio = (nota1 + nota2 + nota3 ) /3;
    if (promedio >= 7){
        document.write('Promocionado')
    }
    else{
        document.write('No promocionaste')
    }


}
//7. Funcion para ver si dos claves son iguales
function obtenerClavesIguales(){
    let clave1 = prompt("Ingrese la clave 1: ");
    let clave2 = prompt("Ingrese la clave 2: ");
    if (clave1 === clave2){
        document.write("Las claves son iguales")
    }
    else{
        alert('Prosiga');
    }
}
//8.Funcion operaciones [Estrcuturas condicionales compuestas]
function operacionesEstructura(){
    let valor1 = parseInt(prompt("Ingrese el primer valor: "));
    let valor2 = parseInt(prompt("Ingrese el segundo valor: "));
    if(valor1 > valor2){
        let suma = valor1 + valor2;
        let resta = valor1 - valor2;
        alert("La suma de los valores es: "+ suma + ", y la resta es: "+ resta)
    }
    else{
        let producto = valor1 * valor2;
        let cociente = valor1 / valor2;
        alert("El producto es: " + producto + ", y el cociente del primero respecto al segundo es: " + cociente);
    }
}
//9. Ingreso numero positivo
function ingresoNumero(){
    let numero = prompt("Ingresa un numero positivo entre 1 y 99");
    //Convertir el valor ingreso a numero entero
    let numeroEntero = parseInt(numero);
    //Validar si esta en en rango permitido
    // Validar que el número esté en el rango permitido (1 a 99)
    if (numeroEntero >= 1 && numeroEntero <= 99) {
        // Verificar si el número tiene uno o dos dígitos
        if (numeroEntero < 10) {
            alert("El número tiene un dígito.");
        } else {
            alert("El número tiene dos dígitos.");
        }
    } else {
        alert("El número ingresado no está en el rango de 1 a 99.");
    }
}
//10.Verificar Fecha navidad
function verificarNavidad(){
    let dia = parseInt(prompt("Ingrese el dia: "));
    let mes = parseInt(prompt("Ingrese el mes: "));
    let anio = parseInt(prompt("Ingrese el anio: "));
    //Verificar si corresponde a navidad
    if(dia === 25 && mes === 12){
        alert("La fecha correspone a navidad,  " + "Fecha: "+ dia+"/"+mes+"/"+anio );
    }else{
        alert("La fecha NO corresponde a Navidad. Fecha: " + dia + "/" + mes + "/" + anio);
    }
}
//11.Ingreso Valores por teclado
function valoresTeclado(){
//Obtener los 4 valores por teclado
let valor1 = parseFloat(prompt("Ingrese el valor 1: "));
let valor2 = parseFloat(prompt("Ingrese el valor 2: "));
let valor3 = parseFloat(prompt("Ingrese el valor 3: "));
//Comprobar si todos los valores son iguales
if(valor1 === valor2 && valor2 === valor3 )
{
    //Si son iguales, realizar la operacion
    let resultado = (valor1 + valor2) * valor3;
    alert("Los valores son iguales, EL resultado es: "+ resultado);
}else{
    alert("Los valores no son iguales. No se puede realizar ninguna operacion")
}
}
//12. Ingreso de tres numeros < 10
function menoresDiez(){
    let valor1 = parseInt(prompt("Ingrese valor 1: "));
    let valor2 = parseInt(prompt("Ingrese el valor 2:"));
    let valor3 = parseInt(prompt("Ingrese el valor 3: "));
    if(valor1 < 10 && valor2 < 10 && valor3 < 10){
        alert("Los numeros son menores a 10")
    }else{
        alert("Uno o mas numeros son mayores a 10")
    }
}
//13. Ingreso coordenadas Cuadrante
function coordenadasCuadrante(){
    let x = parseInt(prompt("Ingrese el valor x: "));
    let y = parseInt(prompt("Ingrese el valor y: "));
    
    let mensaje;

    if (x === 0 && y === 0) {
        mensaje = "El punto está en el origen (0,0)";
    } else if (x === 0) {
        mensaje = "El punto está sobre el eje Y";
    } else if (y === 0) {
        mensaje = "El punto está sobre el eje X";
    } else if (x > 0 && y > 0) {
        mensaje = "El punto está en el primer cuadrante";
    } else if (x < 0 && y > 0) {
        mensaje = "El punto está en el segundo cuadrante";
    } else if (x < 0 && y < 0) {
        mensaje = "El punto está en el tercer cuadrante";
    } else {
        mensaje = "El punto está en el cuarto cuadrante";
    }

    alert(mensaje + ": coordenada (" + x + "," + y + ")");
}
//14. Informe saldo operario
function informeOperario() {
    // Obtener sueldo y antigüedad, asegurando que sean números
    let sueldo = parseFloat(prompt("Ingrese el sueldo: "));
    let antiguedad = parseInt(prompt("Ingrese la antigüedad en años: "));

    // Validar que los inputs sean números válidos
    if (isNaN(sueldo) || isNaN(antiguedad)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return; // Salir de la función si los inputs no son válidos
    }

    let sueldoNuevo;
    let mensaje;

    if (sueldo < 500) {
        if (antiguedad >= 10) {
            sueldoNuevo = sueldo * 1.20; // Aumento del 20%
            mensaje = `El sueldo aumentó un 20%. El nuevo sueldo es: $${sueldoNuevo.toFixed(2)}`;
        } else {
            sueldoNuevo = sueldo * 1.05; // Aumento del 5%
            mensaje = `El sueldo aumentó un 5%. El nuevo sueldo es: $${sueldoNuevo.toFixed(2)}`;
        }
    } else {
        sueldoNuevo = sueldo;
        mensaje = `El sueldo queda igual: $${sueldo.toFixed(2)}`;
    }

    alert(mensaje);
}
//15. El de operadores ya existe un ejemplo(el 12)

//================================================//

//Estructura switch//
//16.Solicitar ingreso de palabras, si esta en la lista, traducirlo
function traducirPalabras(){
    let palabra = prompt("Ingrese una palabra: ");
    switch(palabra){
        case 'casa':
            alert('house');
            break;
        case 'mesa':
            alert('table');
            break;
        case 'perro':
            alert('dog');
            break;
        case 'gato':
            alert('cat');
            break;
        default:
            alert("Ingrese una palabra correcta");
            break;

    }
}
//=================================================//
//Estructura repetitiva: While
//17. Programa que imprima 25 terminos: 11-22-33-44
function imprimirContadorOnce(){
    let valor = 11
    let contador = 0
    while(contador < 25){
        document.write('Valor: '+ contador + ' es:' + valor + '<br>');
        contador++;
        valor = valor + 11
    }
}
//18. Multplos de 8
function multiplosOcho(){
    let valor = 8;
    while( valor <=  500 ){
        document.write(valor + '<br>') ;
        valor += 8;
    }
}
//19. Notas Alumnos
function notasAlumno(){
    let notas = 10;
    
}

//Ingreso de palabras
//FUNCIONES//
//Funcion para cargar dos enteros
function CargarEnteros(){
    let entero1 = parseInt(prompt("Ingrese el entero menor: "));
    let entero2 = parseInt(prompt("Ingrese el entero mayor: "));
    for (let f = entero1; f <= entero2; f++){
        let tabla = document.write(f + ' ');
    }
}
//Funciones con Parametros
function tresEnteros(entero1, entero2, entero3) {
    let menor;

    if (entero1 <= entero2 && entero1 <= entero3) {
        menor = entero1;
    } else if (entero2 <= entero1 && entero2 <= entero3) {
        menor = entero2;
    } else {
        menor = entero3;
    }

    console.log("El menor es: " + menor);
}
//Clase DATE
//Confecionar un programa que muestre en que cuatrimestre estamos(obtener el mes)
function mostrarCuatrimestre(){
    let fecha = new Date()
    let mes = fecha.getMonth() + 1;
    let cuatrimestre;
    if(mes >=1 && mes <=4){
        cuatrimestre = 'Primer Cuatrimestre';
    }else if(mes >= 5 && mes <= 8){
        cuatrimestre = 'Segundo Cuatrimestre';
    }else{
        cuatrimestre = 'Tercer cuatrimestre';
    }
    document.write('Estamos en el: ' + cuatrimestre);  

}

//Clase ARRAY
//Programa que permita ingresar un vector de 8 elementos, e informe
//Valor acumulado de todos los elementos del vector, Valor acumulado de los elementos que sean > 36, Cantidad de valores > 50
function valorAcumulado() {
    let vector = [];
    let total_acumulado = 0;
    let mayores_36 = 0;
    let mayores_50 = 0;

    for (let i = 0; i < 8; i++) {
        let valor = parseFloat(prompt(`Ingrese el elemento ${i + 1} del vector:`));
        vector.push(valor);

        // Acumulamos el valor total
        total_acumulado += valor;

        // Acumulamos los valores mayores a 36
        if (valor > 36) {
            mayores_36 += valor;
        }

        // Contamos los valores mayores a 50
        if (valor > 50) {
            mayores_50++;
        }
    }

    // Mostramos los resultados en el HTML
    document.getElementById("resultados").innerHTML = `
        <p>Valor acumulado de todos los elementos del vector: ${total_acumulado}</p>
        <p>Valor acumulado de los elementos mayores a 36: ${mayores_36}</p>
        <p>Cantidad de valores mayores a 50: ${mayores_50}</p>
    `;
}

function mostrarDeportes() {
    // Obtener todos los checkboxes marcados
    const checkboxes = document.querySelectorAll('input[name="deportes"]:checked');
    const deportesElegidos = [];

    // Recorrer los checkboxes seleccionados y agregar su valor al array
    checkboxes.forEach((checkbox) => {
        deportesElegidos.push(checkbox.value);
    });

    // Mostrar los deportes elegidos
    const resultadoDiv = document.getElementById('resultado');
    if (deportesElegidos.length > 0) {
        resultadoDiv.innerHTML = `Has elegido: ${deportesElegidos.join(', ')}`;
    } else {
        resultadoDiv.innerHTML = 'No has seleccionado ningún deporte.';
    }
}
