class Producto{
    nombre;
    precio;
    cantidad;
    categoria;
    constructor(nombre, precio, cantidad, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

class ProductoVendido extends Producto{ //Clase que hereda de producto para almacenar un historial de productos ya vendidos
    ventaTotal;
    fechaVenta;
    $ciComprador; //Variable privada protegiendo la informacion del comprador

    set(fechaVenta, venta, ciComprador){ //Set para poder almacenar los nuevos datos en adicion con la cedula del comprador.
        this.ventaTotal += venta;
        this.fechaVenta = fechaVenta;
        this.$ciComprador = ciComprador; 
    }
}

class Inventario{
    productos = [ //inventario de productos
        new Producto("Canguil", 0.5, 20, "alimento"),
        new Producto("Fosforos", 0.1, 100, "utilidad"),
        new Producto("Caramelos", 1, 150, "alimento"),
        new Producto("Leche", 1.2, 30, "alimento"),
        new Producto("Mesa", 50, 20, "mueble"),
    ];

    ordenarProductos(){
        this.productos.sort((a, b) => a.precio - b.precio); //funcion para ordenar productos segun su precio
    }

    listarProductos(ascendente){ //Lista los productos de forma ascendente si "ascendente = true" y descendente si "ascendete = false"
        this.ordenarProductos();
        if (ascendente){
            for(let i = 0; i<this.productos.length; i++){
                console.log(this.productos[i]);
            }
        }
        else{
            for(let i = this.productos.length; i>= 0; i--){
                console.log(this.productos[i]);
            }
        }
    }

    listarPorCategoria(categoria){
        for(let i in this.productos){ //Itera cada producto y si pertenece a la categoria entonces se muestra
            if (this.productos[i].categoria == categoria)
                console.log(this.productos[i]);
        }
    }
}

let inventario = new Inventario();

class Venta{
    ventasRealizadas = [];
    
    totalIngresos = 0;
    productoMasVendido = ""; 
    productosVendidos = [];

    realizarVenta(nombre, cantidad){
        let productoExistente = false; //flag para saber si el producto existe
        let productoEnStock = false; //flag para saber si el producto tiene suficiente stock
        for (let i in inventario.productos){
            let producto = inventario.productos[i];
            if (producto.nombre == nombre){
                productoExistente = true;
                let stockProducto = producto.cantidad //variable aux para realizar la resta sin modificar el stock original y poder verificar
                if((stockProducto -= cantidad) >= 0){
                    productoEnStock = true
                    producto.cantidad -= cantidad
                    console.log(`Producto: ${producto.nombre} vendido | cantidad: ${cantidad}`) //mensaje de feedback indicando venta
                    this.ventasRealizadas.push(`Producto: ${producto.nombre} | cantidad: ${cantidad} | el: ${Date()}`); //almacenamos la venta
                    this.totalIngresos += cantidad * producto.precio; //sumamos los ingresos generados a los totales
                    return;
                }  
            }
        }

        //Verificamos las flags
        if (!productoExistente){
            console.log("ERROR: NO DISPONEMOS DEL PRODUCTO")
            return; //en caso de no existir no hace falta verificar si hay stock entonces retorna
        }
        if (!productoEnStock) console.log(`ERROR NO DISPONEMOS ${cantidad} UNIDADES DEL PRODUCTO`);
        
    }

    aplicarDescuento(categoria, procentaje){
        if (procentaje < 0){ //Evita errores con porcentajes negativos
            procentaje *= -1;
        }
        for (let i in inventario.productos){
            if(inventario.productos[i].categoria == categoria){ 
                let producto = inventario.productos[i];
                producto.precio -= producto.precio * (procentaje / 100);       
            }
        }
    }

    imprimirReporte(){
        let productos = inventario.productos;
        console.log("--------PRODUCTOS---------");
        inventario.listarProductos(true); //Imprime los productos de forma ascendente ya que "ascendete = true"
        console.log("--------------------------\n\n");
        console.log("----INFORMACION VENTAS----");
        console.log(`El producto mas vendido fue: ${this.productoMasVendido}`);
        console.log(`TOTAL ingresos generados: ${this.totalIngresos}`);
    }
}

let tienda = new Venta(); //instanciamos nuestra clase ventas y realizamos un par de operaciones de prueba

tienda.realizarVenta("Canguil", 10);
tienda.realizarVenta("Canguil", 11);
tienda.aplicarDescuento("alimento", 50);
tienda.imprimirReporte();

tienda.realizarVenta("Leche", 1);
tienda.imprimirReporte();

console.log(tienda.ventasRealizadas);
//inventario.listarPorCategoria("alimento"); EJEMPLO DE COMO LISTAR POR CATEGORIA