function calcularPromedio(num1, num2, num3){
    if (typeof(num1) != "number" || typeof(num2) != "number" || typeof(num3) != "number") 
        return "Error los datos para el promedio no son numericos";
    return (num1 + num2 + num3) / 3;
}

const determinarMayor = function(num1, num2) {
    if (typeof(num1) != "number" || typeof(num2) != "number") 
        return "Error los datos para determinar el mayor no son numericos";
    return num1 > num2 ? "num1 es mayor" : "num2 es mayor"
};

const esPar = (num) => {
    if (typeof(num) !== "number")
      return "Error: los datos para verificar si es par no son numéricos"
    return num % 2 === 0 ? "El número es par" : "El número es impar";
  };

(function(){
    let num1 = 1;
    let num2 = 10;
    let num3 = 20;
    console.log(calcularPromedio(num1, num2, num3));
    console.log(determinarMayor(num1, num2));
    console.log(esPar(num1)); 
}())