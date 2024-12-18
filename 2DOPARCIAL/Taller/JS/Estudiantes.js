let Estudiantes = [
    ["Juan", [10, 4, 2, 20, 20]],
    ["Manuel", [10, 4, 2, 17, 20]],
    ["Caetano", [10, 4, 14, 5, 20]],
    ["Nestor", [10, 15, 14, 5, 20]],
    ["Igor", [13, 15, 14, 5, 20]],
    ["Frank", [13, 18, 14, 7, 20]],
    ["Hugo", [20, 20, 20, 20, 20]],
    ["Palin", [13, 20, 14, 5, 20]],
    ["Matias", [13, 18, 19, 20, 20]],
    ["Leonardo", [18, 15, 14, 15, 20]]
];

let mejor_promedio = 0;
let peor_promedio = 20;
let mejor_promedio_estudiante;
let peor_promedio_estudiante;

for (let i in Estudiantes) {
    let nombre = Estudiantes[i][0];
    let notas = Estudiantes[i][1];

    console.log("   " + nombre);

    // Calcular el promedio
    let promedio = notas.reduce((acumulador, not) => acumulador + not, 0) / notas.length;

    // Determinar el estado del estudiante
    let estado_estudiante = "";
    if (promedio >= 16) estado_estudiante = "Excelente";
    else if (promedio >= 12 && promedio < 16) estado_estudiante = "Bueno";
    else if (promedio >= 8 && promedio < 12) estado_estudiante = "Aprobado";
    else if (promedio < 8) estado_estudiante = "Reprobado";
    console.log("ESTADO: " + estado_estudiante);

    // Actualizar mejor y peor promedio
    if (promedio > mejor_promedio) {
        mejor_promedio = promedio;
        mejor_promedio_estudiante = nombre;
    }
    if (promedio < peor_promedio) {
        peor_promedio = promedio;
        peor_promedio_estudiante = nombre;
    }

    console.log("NOTAS");
    for (let nota of notas) {
        console.log(nota);
    }

    console.log("Promedio = " + promedio);

    // Calcular la nota máxima y mínima
    let calificacion_max = notas.reduce((acumular, num) => (num > acumular ? num : acumular), notas[0]);
    let calificacion_min = notas.reduce((acumular, num) => (num < acumular ? num : acumular), notas[0]);

    console.log("Calificacion max = " + calificacion_max);
    console.log("Calificacion min = " + calificacion_min);
}

console.log("\n\nEstudiante con mejor promedio: " + mejor_promedio_estudiante);
console.log("\n\nEstudiante con peor promedio: " + peor_promedio_estudiante);