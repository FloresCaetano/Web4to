var name = "Manolito17";
var edad;
edad = 25;
var apellido = "Plain";
console.log("Mi nombre es " + name + " " + apellido);
console.log("Mi edad es " + edad)
console.log("Mi nombre es " + name + " " + apellido + " y tengo " + edad + " año");
let x = 10;
let y = 20;
let z = x + y;
console.log(z);


let nombre = "Caetanesco";
console.log(nombre);

let numero = 1000;
console.log(numero);

let persona = {
    nombre : "Caetanesquiño",
    apellido : "Vargas",
    edad: 25
};

console.log(persona);

let let1 = "Caetraco";
console.log(typeof(let1));

let let2 = 25;
console.log(typeof(let2));

let let3 = true;
console.log(typeof(let3));

let let4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(typeof(let4));

let numero3 = 3, numero4 = 2;
let numero5 = numero3 + numero4;

numero5 = ++numero3;
console.log(numero3);
console.log(numero5);

numero5 = numero4++;
console.log(numero4);
console.log(numero5);


numero5 = --numero3;
console.log(numero3);
console.log(numero5);

numero5 = numero4--;
console.log(numero4);
console.log(numero5);

let pre1 = 2, pre2 = 3, pre3 = 4, pre4 = 5;
let pre5 = (pre1 + pre2) * pre3
console.log(pre5);

let pre6 = pre3 * (pre1 + pre2);
console.log(pre6);

let pre7 = pre1 + pre2 * pre3;
console.log(pre7);

let pre8 = (pre1 * pre3) + pre2 * pre4 / (pre1 + pre2);
console.log(pre8)

let operador1 = 3, operador2 = 2;
operador1 += operador2;
console.log(operador1);

operador1 -= operador2;
console.log(operador1);

let operador3 = 3, operador4 = "3";

operador10 = operador3 == operador4;
console.log(operador10)

let operador11 = operador3 === operador4;
console.log(operador11);

if (operador3 === operador4){
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

let numero_a_comprobar = 1;
if (numero_a_comprobar % 2 == 0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}

let edad_persona = 18;
if(edad_persona >= 18){
    console.log("La persona es mayor de edad");
}else{
    console.log("La persona es menor de edad")
}

// De un conj de valore [12, 14, 14, 16, 29, 31, 43, 65, 20, 22]
let numeros_pares = 0, numeros_impares = 0;
let numeros_a_comprobar = [12, 14, 14, 16, 29, 31, 43, 65, 20, 22];

for(let i = 0; i<numeros_a_comprobar.length; i++){
    if (numeros_a_comprobar[i] % 2 == 0){
        numeros_pares++;
    }else{
        numeros_impares++;
    }
}

console.log(numeros_pares);
console.log(numeros_impares);

let s = 12;

let valMin = 5, valorMax = 15;

if (s >= valMin && s <= valorMax){
    console.log("El valor esta dentro del rango");
}else{
    console.log("El valor no esta dentro del rango");
}

if (s >= valMin || s <= valorMax){
    console.log("El valor esta dentro del rango");
}else{
    console.log("El valor no esta dentro del rango")
}

let resultado = s >= valMin && s <= valorMax ? "El valor essta dentro del rango" : "El valor no esta ....";
console.log(resultado);


let minumero = "20";
console.log(typeof minumero);

let minumero2 = Number(minumero);
console.log(typeof minumero2);

let minumero3 = parseInt(minumero);
console.log(typeof minumero3);

console.log(parseInt("42px"));
console.log(parseInt(3.141516));
console.log(parseInt("abc"));
console.log(Number("42px"));
console.log(Number(3.141516));
console.log(Number("abc"));
console.log(Number("1"));

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(Infinity));
console.log(String(NaN));
console.log(String(Infinity));


numero = Number(undefined);
if (!isNaN(numero)){
    console.log("Es un numero");
}else{
    console.log("No es un numero")
}

minumero2;
let coconut;

if (undefined == coconut){
    console.log("No es un numero");
}else {
    console.log(" Esta definido")
}