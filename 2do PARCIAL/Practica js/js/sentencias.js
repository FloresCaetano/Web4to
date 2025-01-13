let numero = 1;
if (numero == 1) {
    console.log("Numero 1");
}
else if (numero == 2){
    console.warn("Numero 2 CUIDAO");
}
else if (numero == 3){
    console.warn("Numero 3 CUIDAO");
}
else {
    console.log("No es un numero");
}

//EJERCICIO REFERENTE A LAS ESTACIONES DEL AÑO
//INVIERNO, PRIMAVERA, OTOÑO, VERANO

let mes = 11;
let estacion;

if (mes == 1 || mes == 2 || mes == 3){
    estacion = "Invierno";
}
else if (mes == 4 || mes == 5 || mes == 6){
    estacion = "Otoño";
}
else if (mes >= 7 && mes < 10){
    estacion = "Primavera"
}
else if (mes >= 10 && mes <= 12){
    estacion = "Verano"
}

console.warn(estacion);

//CALCULAR HORA DEL DIA
/*
6am - 11am ==> Buenos dias
12 - 18 Buenas Tardes
19 - 23 Buenas Noches
24 - 6 Durmiendo
*/

let horaDia = 12;
let mensaje;
/*
if (horaDia >= 6 && horaDia <= 11){
    mensaje = "Buenos dias"
}
else if (horaDia >= 12 && horaDia <= 18){
    mensaje = "Buenas tardes"
}
else if (horaDia >= 19 && horaDia <= 23){
    mensaje = "Buenas noches"
}
else if (horaDia >= 24 && horaDia < 6){
    mensaje = "Durmiendo"
}
else{
    mensaje = "No es una hora correspondida"
}
*/
console.warn(mensaje);

let mesE = 11;
switch(mesE){
    case 1: case 2: case 3:
        estacion = "Invierno"
        break;
    case 4: case 5: case 6:
        estacion = "Otoño"
        break;
    case 7: case 8: case 9:
        estacion = "Primavera"
        break;
    default:
        estacion = "Verano"
        break;
}

if (horaDia >= 6 && horaDia <= 11) mensaje = "Buenos dias";
else if (horaDia >= 12 && horaDia <= 18) mensaje = "Buenas tardes";
else if (horaDia >= 19 && horaDia <= 23) mensaje = "Buenas noches";
else if (horaDia >= 24 && horaDia < 6) mensaje = "Durmiendo";
else mensaje = "No es una hora correspondida";