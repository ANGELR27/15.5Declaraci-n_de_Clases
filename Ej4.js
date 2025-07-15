class Figura {
  constructor(color) {
    this.color = color;
  }
  area() {
    return 0;
  }
}

class Rectangulo extends Figura {
  constructor(color, base, altura) {
    super(color);
    this.base = base;
    this.altura = altura;
  }
  area() {
    return this.base * this.altura;
  }
}

class Circulo extends Figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }
  area() {
    return Math.PI * this.radio * this.radio;
  }
}

const rectangulo1 = new Rectangulo("Rojo", 4, 5);
const circulo1 = new Circulo("Azul", 3);

console.log(`Área del rectángulo: ${rectangulo1.area()}`);
console.log(`Área del círculo: ${circulo1.area().toFixed(2)}`);
