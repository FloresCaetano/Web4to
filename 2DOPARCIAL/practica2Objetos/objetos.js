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

//Metodo GET en Objetos

let personaGET = {
    nombre: "Marco",
    apellido: "Valdiviezo",
    email: "mvaldiviezo",
    edad: 23,
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(personaGET.nombreCompleto);

//Metodo SET en Objetos
//Set es un metodo que permite modificar el valor de una propiedad
let personaSet = {
    nombre: "Marco",
    apellido: "Valdiviezo",
    email: "mvaldiviezo",
    edad: 23,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(personaSet.lang);
personaSet.lang = "en";
console.log(personaSet.lang);

//constructores en JS

//Si se desea crear un objeto con las mismas propiedades, se puede hacer uso de un constructor
//Un constructor es una funcion que se encarga de crear un objeto con las propiedades que se le indiquen

function PersonaFC(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padreFC = new PersonaFC("juan", "perez", "jPerez@gmail.com");
console.log(padreFC);

let madreFC = new PersonaFC("maria", "perez", "mPerez@gmail.com");
console.log(madreFC);

padreFC.tel = "123456789";

console.log(padreFC);

//Agregar un metodo a una funcion constructora
PersonaFC.prototype.telefono = "123456789";
console.log(padreFC.telefono);
console.log(madreFC.telefono);

//uso de Call
let personaCall1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

let personaCall2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

//Para usar el metodo de personaCall1 en personaCall2 se puede hacer uso de call
console.log(personaCall1.nombreCompleto());
console.log(personaCall1.nombreCompleto.call(personaCall2));

//como pasar parametros a travez del metodo call
let personaCall3 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + " " + tel;
    }
}

let personaCall4 = {
    nombre: "Carlos",
    apellido: "Lara"
}

console.log(personaCall3.nombreCompleto("Lic", "123456789"));
console.log(personaCall3.nombreCompleto.call(personaCall4, "Ing", "987654321"));

let personaApply1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

let personaApply2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

console.log(personaApply1.nombreCompleto());
console.log(personaApply1.nombreCompleto.apply(personaApply2));

let personaApply3 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + " " + tel;
    }
}

let personaApply4 = {
    nombre: "Carlos",
    apellido: "Lara"
}

console.log(personaApply3.nombreCompleto("Lic", "123456789"));
console.log(personaApply3.nombreCompleto.apply(personaApply4, ["Ing", "987654321"]));