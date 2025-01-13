class Estudiante {
    nombre;
    notas;
    constructor(_nombre, _notas){
        this.nombre = _nombre;
        this.notas = _notas;
    }
}

function calcular_promedio(notas){
    let suma_notas = notas.reduce((acumulador, not) => acumulador + not, 0);
    return suma_notas / notas.length;
}

function determinar_max(notas){
    return notas.reduce((acumular, num) => (num > acumular ? num : acumular), notas[0]);
}

function determinar_min(notas){
    return notas.reduce((acumular, num) => (num < acumular ? num : acumular), notas[0]);
}

function promedio_a_estado(promedio){
    if (promedio >= 16) return "Exelente"
    else if (promedio >= 12 && promedio < 16) return "Bueno"
    else if (promedio >= 8 && promedio < 12) return "Aprobado"
    else if (promedio < 8) return "Reprobado"
}

let Estudiantes = [
    new Estudiante("Juan", [10, 4, 2, 20, 20]),
    new Estudiante("Manuel", [10, 4, 2, 17, 20]),
    new Estudiante("Caetano", [10, 4, 14, 5, 20]),
    new Estudiante("Nestor", [10, 15, 14, 5, 20]),
    new Estudiante("Igor", [13, 15, 14, 5, 20]),
    new Estudiante("Frank", [13, 18, 14, 7, 20]),
    new Estudiante("Hugo", [20, 20, 20, 20, 20]),
    new Estudiante("Palin", [13, 20, 14, 5, 20]),
    new Estudiante("Matias", [13, 18, 19, 20, 20]),
    new Estudiante("Leonardo", [18, 15, 14, 15, 20])
]

let mejor_promedio = 0;
let peor_promedio = 20;
let mejor_promedio_estudiante;
let peor_promedio_estudiante;

for(let i in Estudiantes){
    console.log("   " + Estudiantes[i].nombre)
    let promedio = calcular_promedio(Estudiantes[i].notas);
    console.log(promedio_a_estado(promedio));
    if (promedio > mejor_promedio) {
        mejor_promedio = promedio;
        mejor_promedio_estudiante = Estudiantes[i];
    }
    if (promedio < peor_promedio){
        peor_promedio = promedio;
        peor_promedio_estudiante = Estudiantes[i]
    }

    console.log("NOTAS");
    for(let nota of Estudiantes[i].notas){
        console.log(nota);
    }
    console.log("Promedio = " + promedio);
    console.log("Calificacion max = " + determinar_max(Estudiantes[i].notas))
    console.log("Calificacion min = " + determinar_min(Estudiantes[i].notas))
}

console.log("\n\nEstudiante con mejor promedio: " + mejor_promedio_estudiante.nombre)
console.log("\n\nEstudiante con peor promedio: " + peor_promedio_estudiante.nombre)





