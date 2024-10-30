//Exercises 3

// 1.- Variables con typeof
let firstName = "Tadeo";
let lastName = "Aviles";
let country = "Mexico";
let city = "Playa del Carmen";
let age = 19;
let isMarried = false;
let year = 2024;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2.- typeof = 10?
console.log(typeof "10"); //FALSE

// 3.- ParseInt = 10?
console.log(parseInt(9.8)); //FALSE

// 4.- Verificar valor booleano
    // 1.- Valores verdaderos
        let abc = 1 < 5;
        let def = 10 < 20 || 10 > 20;
        let ghi = 5 < 6 && 6 > 5;
        console.log(abc);
        console.log(def);
        console.log(ghi);
    // 2.- Valores falsos
        let jkl = 1 === "1";
        let mnñ = 2 > 5;
        let opq = 10 != 10;
        console.log(jkl);
        console.log(mnñ);
        console.log(opq);

// 5.- Calcular el resultado de las siguientes expresiones
let i = 4 > 3;
console.log(i); //True

let ii = 4 >= 3
console.log(ii); //True

let iii = 4 < 3
console.log(iii); //False

let iv = 4 <= 3
console.log(iv); //False

let v = 4 == 4
console.log(v); //True

let vi = 4 === 4
console.log(vi); //True

let vii = 4 != 4
console.log(vii); //False

let viii = 4 !== 4
console.log(viii); //False

let ix = 4 != "4"
console.log(ix); //False

let x = 4 == "4"
console.log(x); //True

let xi = 4 === "4"
console.log(xi);  //False

// 6.- Utilice Date
//Año
const now = new Date();
console.log(now.getFullYear());

//Mes con numero
const now1 = new Date();
console.log(now1.getMonth());

//Fecha de hoy
const now2 = new Date();
console.log(now2.getDate());

//Dia con numero
const now3 = new Date();
console.log(now3.getDay());

//Hora actual
const now4 = new Date();
console.log(now4.getHours());

//Minutos actuales
const now5 = new Date();
console.log(now5.getMinutes());

//Numeros transcurridos desde 1 Enero  1970
const now6 = new Date();
console.log(now6.getTime());

// 7.- Prompt del area de un triangulo
let base = prompt("Insert triangle base", "Write value here");
let altura = prompt("Insert triangle height", "Write value here")

const area =  0.5 * base * altura;
alert("The triangle area is: " + area)
console.log(area);

// 8.- Prompt perimetro de un triangulo
let sideA = Number(prompt("Insert side A value", "Write value here"));
let sideB = Number(prompt("Insert side B value", "Write value here"));
let sideC = Number(prompt("Insert side C value", "Write value here"));

const perimeter = sideA + sideB + sideC;
alert("The triangle perimeter is: " + perimeter);
console.log(perimeter);

// Solo busqué como cambiar el prompt a entero porque me lo concatenaba😂