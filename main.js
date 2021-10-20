let producto = 0;
let cantidadProducto = 0;
let precio = 0

//clase constructora//
/*primera con mayuscula siempre*/

class Pedido { 
    constructor(producto, precio, cantidad){      /*parametros*/
        this.producto = producto,     /*asociar con this*/
        this.precio = precio,
        this.cantidad = cantidad,
        this.envio = 0,
        this.subTotal = 0,
        this.total = 0

    }
    
    /*metodos*/

    calcularSubTotal() {      
        this.subTotal = this.precio * this.cantidad;
    }
    calcularIva () {
        return this.subTotal * 0.21;
    }

    calcularEnvio() {
        if(this.subTotal >= 5000){
            this.envio = 0;
        } else {
            this.envio = 650;
        }
    }

    calcularTotal () {
        this.total = this.subTotal + this.envio + this.calcularIva();

    }

}

function pedidoProducto () {
    while (!producto || producto == 0 || producto > 3){
        producto = parseInt(prompt("¿Que combo te gustaria? Intoduce el numero junto a la opcion:\n Combo 1: Botanicos Gin Tonic ($1000),\n Combo 2: Botanicos + Botella Gin 750ml ($1850),\n Combo 3: Botanicos Gin + Botella gin tonic premium + 2 Copas ($3600)"))
    }
    switch(producto){
        case 1:
            producto = "Botanicos Gin Tonic";
            precio = 1000;
            break
        case 2:
            producto = "Botanicos + Botella Gin 750ml";
            precio = 1850;
            break;
        case 3:
            producto = "Botanicos Gin + Botella gin tonic premium + 2 Copas";
            precio = 3600;
            break;
    }

    while(!cantidadProducto ||  cantidadProducto == 0){
        cantidadProducto = parseInt(prompt("producto elegido: "+ producto + "\n Introduzca la cantidad deseada(solo numeros)"));
    }
    return new Pedido(producto, precio, cantidadProducto)
}

alert ("bienvenida/o a la tienda de Ramé");

const pedido = pedidoProducto();

pedido.calcularSubTotal();
pedido.calcularIva();
pedido.calcularEnvio();
pedido.calcularTotal();

alert("Detalle del pedido: \n" +
    "- " + pedido.producto + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad + "\n" + "- IVA 21%: $" + pedido.calcularIva() + "\n" + "- Costo de envio: $" + pedido.envio + "\n" + "Total = $" + pedido.total)