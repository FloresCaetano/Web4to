let persona = {
    nombres : "juan",
    apellido: "perez",
    email: 'jperez@gmail.com',
    edad: 35
}

console.log(persona);

let people = {
    name: "Moroco",
    lastName: "Fornait",
    age: 35,
    fullName: function (){
        return this.name + " " + this.lastName; 
    }
}

console.log(people.fullName())

const people2 = {
    name: "Moroco",
    lastName: "Fornait",
    age: 35,
    fullName: function (){
        return `Hola mi nombre es ${this.nombre}`
    }
}

const persona1 = new Object();
persona1.nombre = "Maria";
persona1.apellido = "DB";
persona1.saludar = function () {
    console.log(`Hola mi nombre es ${this.nombre}`)
}

persona1.saludar();

const prototipoPersona = {
    saludar: function(){
        console.log(`Hola desde prototipo, soy ${this.nombre}`);
    }
}

const persona2 = Object.create(prototipoPersona);
persona2.nombre = 'Iguana Salvaje';
persona2.saludar();

class PersonaFinalicia {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar() {
        console.log(`Hola desde clases, soy ${this.nombre}`)
    }
}

const personaFinalicia = new PersonaFinalicia('Fran', 'clin');
personaFinalicia.saludar();

function Personita(nombre, edad) { //FUNCION CONSTRUCTORA
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log(`Hola desde clases, soy ${this.nombre}`)
    }
}

const personita = new Personita('Elclon', 45);
personita.saludar();

/////////////////////////////
const persona5 = {nombre : "Manuelito"}
persona5.edad = 34;
persona5.nombre = "Pedro Martinez";
console.log(persona5);

// ELIMINAR PROPIEDADES
//delete persona5.edad;
console.log(persona5);

for (propiedad in persona5){
    console.log(propiedad);
    console.log(persona5[propiedad])
}

for (let clave in persona5){
    console.log(`${clave}: ${persona5[clave]}`)
}

console.log('name' in persona5);
console.log(persona5.hasOwnProperty('age'))

console.log(Object.keys(persona5))
console.log(Object.values(persona5))
console.log(Object.entries(persona5));

const copia = Object.assign({}, persona5);
console.log(copia);

//Object.freeze(persona5);

Object.seal(persona5);

delete persona5.nombre;
console.log(persona5);

let personaArray = Object.values(persona5);
console.log(personaArray);
let personaString = JSON.stringify(persona5);
console.log(personaString);