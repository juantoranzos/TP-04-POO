/*
Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

*/
class Person {
    constructor(name, age, profession) {
      this.name = name;
      this.age = age;
      this.profession = profession;
    }
  
    diHola() {
      console.log(
        `Hola, soy ${this.name}, tengo ${this.age} años y soy ${this.profession}.`
      );
    }
  
    diAdios() {
      console.log(`Chau!`);
    }
  }
  
  const person1 = new Person("Juan", 20, "Desarrollador web");
  const person2 = new Person("Candelaria", 21, "Estudiante de ingenieria");
  
  person1.diHola();
  person1.diAdios();
  person2.diHola();
  person2.diAdios();