class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }
  obtenerDetalles() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
  }
}
class Coche extends Vehiculo {
  constructor(marca, modelo, año, numeroPuertas) {
    super(marca, modelo, año);
    this.numeroPuertas = numeroPuertas;
  }
}
class Moto extends Vehiculo {
  constructor(marca, modelo, año, cilindrada) {
    super(marca, modelo, año);
    this.cilindrada = cilindrada;
  }
}
const vehiculo1 = new Coche("Toyota", "Corolla", 2020, 4);
const vehiculo2 = new Moto("Yamaha", "MT-07", 2021, 689);
console.log(vehiculo1.obtenerDetalles());
console.log(vehiculo2.obtenerDetalles());
