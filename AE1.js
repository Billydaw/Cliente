//1 Paso de script a JS
console.log("Hola Mundo!");

//1-A
alert("Soy el primer script");

//1-B
let alertMessage = "Soy el primer script";

alert (alertMessage);

//1-C
const ALERT_MESSAGE = alertMessage + " y estoy funcionando sobre " + navigator.appVersion;

alert (ALERT_MESSAGE);

//2-A
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses);

//2-B
console.table(meses);

//3
const values = [true, false, 5, "hola", [1,2,3], {age: 2, gender: 'male'}];
console.log(typeof values);

//4
var numero1 = 5;
var numero2 = 8;

if(numero1<numero2){
    console.log("numero1 no es mayor que numero2");
}
if(numero2>=0){
    console.log("numero2 es positivo");
}
if(numero1<0 || numero1!=0){
    console.log("numero1 es negativo o distinto de cero");
}
if(numero1+1 != numero2){
    console.log("Incrementar en una unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//5
let n = 5;
let total = 1;
for (i=1; i<=n; i++) {
    total = total * i; 
}
console.log (total);

//6
var numero = prompt("Introduce un número entero");

function parImpar(numero) {
  if(numero % 2 == 0) {
    return numero+" es número par";
  }
  else {
    return numero+" es número impar";
  }
}
console.log(parImpar(numero));

//7
var number = prompt("Introduce un número");

function absoluto(number){

    var resultado = Math.abs(number);
    return resultado;
}
console.log(absoluto(number));