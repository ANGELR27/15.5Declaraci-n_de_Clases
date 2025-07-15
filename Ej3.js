class Producto {
  constructor(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }
  descripcion() {
    return `Producto: ${this.nombre}, Marca: ${this.marca}, Precio: ${this.precio}`;
  }
}

class Telefono extends Producto {
  constructor(nombre, precio, marca, almacenamiento, ram) {
    super(nombre, precio, marca);
    this.almacenamiento = almacenamiento;
    this.ram = ram;
  }
}

class Laptop extends Producto {
  constructor(nombre, precio, marca, procesador, pulgadas) {
    super(nombre, precio, marca);
    this.procesador = procesador;
    this.pulgadas = pulgadas;
  }
}

const telefono1 = new Telefono("Galaxy S21", 1200, "Samsung", "128GB", "8GB");
const laptop1 = new Laptop("MacBook Air", 1500, "Apple", "M1", "13");

console.log(telefono1.descripcion());
console.log(laptop1.descripcion());
