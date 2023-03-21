/**
 Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

 */
// Crear objeto auto
const auto = {
    color: "rojo",
    marca: "Toyota",
    modelo: "Corolla",
    estaEncendido: false,
    
    // Método para encender el auto
    encender: function() {
      this.estaEncendido = true;
      document.write("El auto está encendido.<br>");
    },
    
    // Método para apagar el auto
    apagar: function() {
      this.estaEncendido = false;
      document.write("El auto está apagado.<br>");
    }
  };
  
  // Mostrar las características del auto en pantalla
  document.write("Color: " + auto.color + "<br>");
  document.write("Marca: " + auto.marca + "<br>");
  document.write("Modelo: " + auto.modelo + "<br>");
  document.write("Estado: " + (auto.estaEncendido ? "Encendido" : "Apagado") + "<br>");
  
  // Ejemplo de uso
  auto.encender(); // Imprime "El auto está encendido."
  document.write("Estado: " + (auto.estaEncendido ? "Encendido" : "Apagado") + "<br>");
  auto.apagar(); // Imprime "El auto está apagado."
  document.write("Estado: " + (auto.estaEncendido ? "Encendido" : "Apagado") + "<br>");
  