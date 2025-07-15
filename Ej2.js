class Empleado {
  constructor(nombre, edad, salarioBase) {
    this.nombre = nombre;
    this.edad = edad;
    this.salarioBase = salarioBase;
  }

  calcularSalario() {
    return this.salarioBase;
  }
}

class Gerente extends Empleado {
  constructor(nombre, edad, salarioBase, bonus) {
    super(nombre, edad, salarioBase);
    this.bonus = bonus;
  }

  calcularSalario() {
    return super.calcularSalario() + this.bonus;
  }
}

class Desarrollador extends Empleado {
  constructor(nombre, edad, salarioBase, lenguaje) {
    super(nombre, edad, salarioBase);
    this.lenguaje = lenguaje;
  }
}

const empleado1 = new Empleado("Laura", 30, 1000);
const gerente1 = new Gerente("Carlos", 40, 2000, 500);
const desarrollador1 = new Desarrollador("Ana", 28, 1500, "JavaScript");

console.log(`${empleado1.nombre} - Salario: ${empleado1.calcularSalario()}`);
console.log(`${gerente1.nombre} - Salario: ${gerente1.calcularSalario()}`);
console.log(
  `${desarrollador1.nombre} - Salario: ${desarrollador1.calcularSalario()}`
);
