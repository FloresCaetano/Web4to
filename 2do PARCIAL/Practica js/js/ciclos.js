const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

console.warn("**** TRADICIONAL ****")
for (let i = 0; i<heroes.length; i++){
    console.warn(heroes[i]);
} 

for (let i in heroes){
    console.warn(heroes[i]);
}

for (let heroe of heroes){
    console.warn(heroe);
}

for (let contador = 0; contador < 10; contador++) {
    if (contador % 2 == 0) continue;
    console.log(contador);   
}

const carros = []
