class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;   
    }
}

let inventario = {
    productos : [
        new Producto("canguil", 0.75, 50),
        new Producto("azucar", 1, 50),
        new Producto("botella de agua", 0.5, 100),
        new Producto("dulce", 0.25, 38)],

    venderProducto: function(nombre, cantidad){
        for (i in this.productos){
            producto = this.productos[i];
            if (producto.nombre == nombre && (producto.cantidad -= cantidad) >= 0){
                producto.cantidad -= cantidad
                console.log(`Producto: ${producto.nombre} vendido | cantidad: ${cantidad}`)
                return;
            }

        }
        console.log("ERROR: NO HAY SUFICIENTES PRODUCTOS DISPONIBLES O NO TENEMOS DISPONIBLE EL PRODUCTO");
    },

    aplicarDescuento: function(descuentoPorcentual){
        if (descuentoPorcentual < 0){
            descuentoPorcentual *= -1;
        }
        for (i in this.productos){
            producto = this.productos[i];
            producto.precio -= producto.precio * (descuentoPorcentual / 100);
        }
    }
}

Object.seal(inventario);

inventario.venderProducto("canguil", 10);
inventario.venderProducto("canguil", 3);
inventario.venderProducto("dulce", 10);
inventario.venderProducto("botella de agua", 10);

inventario.aplicarDescuento(10); // 10% de descuento
console.log(inventario.productos)

