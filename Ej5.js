class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  emitirSonido() {
    console.log("Sonido de animal");
  }
}

class Perro extends Animal {
  emitirSonido() {
    console.log("Guau guau!");
  }
}

class Gato extends Animal {
  emitirSonido() {
    console.log("Miau miau!");
  }
}

const perro1 = new Perro("dog", 5);
const gato1 = new Gato("Misu", 3);

perro1.emitirSonido();
gato1.emitirSonido();
