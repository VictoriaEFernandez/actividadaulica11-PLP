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
