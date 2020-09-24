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