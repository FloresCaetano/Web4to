//setTimeout sirve para ejecutar una función después de un tiempo determinado.
setTimeout(() => {
    console.log('Esto se ejecuta después de 2 segundos');
  }, 2000);

//setInterval sirve para ejecutar una función cada cierto tiempo.
const intervalId = setInterval(() => {
console.log('Esto se ejecuta cada 2 segundos');
}, 2000);

// Para detener el intervalo después de 10 segundos
setTimeout(() => {
clearInterval(intervalId);
console.log('Intervalo detenido');
}, 10000);
  
//promesas, sirven para ejecutar código asincrónico y obtener un resultado en el futuro.
//ejemplo:
function obtenerDatos() {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    const exito = true;
    if (exito) {
        resolve('Datos obtenidos exitosamente');
    } else {
        reject('Error al obtener los datos');
    }
    }, 2000);
});
}

obtenerDatos()
.then((resultado) => {
    console.log(resultado);
})
.catch((error) => {
    console.error(error);
});  

//async/await, es una forma más sencilla de trabajar con promesas.
async function obtenerDatos() {
try {
    const resultado = await new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true; // Cambiar a false para simular un error
        if (exito) {
        resolve('Datos obtenidos exitosamente');
        } else {
        reject('Error al obtener los datos');
        }
    }, 2000);
    });
    console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}

obtenerDatos();

//sync vs async
//sync (síncrono) se ejecuta en orden, uno después del otro.
//async (asíncrono) se ejecuta en paralelo, no necesariamente en orden.

//ejemplo funcion sync:
function sincrono() {
    console.log('SYNC Primero');
    console.log('SYNC Segundo');
    console.log('SYNC Tercero');
}
sincrono();

//ejemplo funcion async:
async function asincrono() {
    console.log('ASYNC Primero');
    
    // Promesas con tiempos diferentes
    await new Promise(resolve => setTimeout(() => {
        console.log('ASYNC Segundo');
        resolve();
    }, Math.random() * 2000));

    await new Promise(resolve => setTimeout(() => {
        console.log('ASYNC Tercero');
        resolve();
    }, Math.random() * 2000));

    console.log('ASYNC Cuarto');
}

asincrono();
