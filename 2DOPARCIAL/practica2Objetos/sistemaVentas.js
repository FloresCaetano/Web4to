//Sistema de ventas
class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio, cantidad, categoria){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this.cantidad = cantidad;
        this._categoria = categoria;
        if(precio < 0){
            console.log('El precio no puede ser negativo');
            this._precio = 0;
        }else{
            this._precio = precio;
        }
    }

    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set precio(precio){
        this._precio = precio;
    }
    set idProducto(idProducto){
        this._idProducto = idProducto;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio} ` ;
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }
    
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(producto.cantidad <= 0){
            console.log('Producto sin stock');
            return;
        }
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            producto.cantidad--;
        }else{
            console.log('No se pueden agregar más productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    aplicarDescuento(categoria, descuento){
        for(let producto of this._productos){
            if(producto._categoria === categoria){
                producto._precio -= producto._precio * (descuento / 100);
            }
        }
    }

    mostrarOrden() {
        this.ordenarProductos();
        let productosOrden = '';
        for (let producto of this._productos) {
            productosOrden += producto.toString() + '\n';
        }
        console.log(`Orden: ${this._idOrden}\nTotal: $${this.calcularTotal()} + imp: $${this.calcularImpuestos()} = $${this.calcularTotal() + this.calcularImpuestos()}\nProductos:\n${productosOrden}`);
    }
    
    calcularImpuestos(){
        let totalImpuestos = 0;
        for(let producto of this._productos){
            totalImpuestos += producto.precio * 0.16;
        }
        return totalImpuestos;
    }

    ordenarProductos(){
        this._productos.sort((a, b) => b.precio - a.precio);
    }
}


let producto1 = new Producto('Pantalon', 200, 100, 'Ropa');
let producto2 = new Producto('Camisa', 100, 50, 'Ropa');
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.aplicarDescuento('Ropa', 50);

orden1.mostrarOrden();

let order2 = new Orden();
let producto3 = new Producto('Cinturon', 50, 10, 'Accesorios');
let producto4 = new Producto('Bolso', 150, 3, 'Accesorios');
let producto5 = new Producto('Relog', 250, 5, 'Tecnologia');
order2.agregarProducto(producto3);
order2.agregarProducto(producto1);
order2.agregarProducto(producto2);
order2.agregarProducto(producto4);
order2.agregarProducto(producto5);

order2.aplicarDescuento('Tecnologia', 20);

order2.mostrarOrden();

//Ejercicio RETO

/*
1. Stock Disminuya
2. Descuento por categoria (metodo)
    Crean una nueva propiedad en la clase producto.
    EJ:
    Los productos de la categoria ELectronica deben tener un descuento del 10% al colocar el total de la venta
3. Apliacion de impuesto:
    Implementar un metodo calcularImpuestos() en la clase orden para que agrege un impuesto 16%
4. Listar los productos de forma Descendente
5. Restriccion adicional:
    Aseguremos que los precios no pueden ser negativos al establecerlos en la clase producto
*/