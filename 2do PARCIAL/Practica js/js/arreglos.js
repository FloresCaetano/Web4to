let videojuegos = ["Mario 3", "Megaman", "Soccer"];

let arregloCosas = [
    true,
    123,
    "Fernando",
    1 + 2,
    function(){},
    () => {},
    ['S', 'Peliculas']
]

console.log((arregloCosas));

let numerosM = [1, 2, 3, 4, 5, 6];
let cuadrados = numerosM.map(num => num * num);
console.log(cuadrados);

let numerosFilter = [1, 2, 3, 4, 5, 6];
let pares = numerosFilter.filter(num => num % 2 != 0);
console.log(pares);

let numerosReduce = [1, 2, 3, 4, 5, 6, 9, 10];
let maximo = numerosReduce.reduce((acumular, num) => (num > acumular ? num : acumular), numerosReduce[0]);
console.log(maximo);