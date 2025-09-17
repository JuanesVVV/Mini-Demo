// Clase base
class Boton {
  constructor(id) {
    this.element = document.getElementById(id);
    this.element.addEventListener("click", () => this.ejecutar());
  }

  ejecutar() {
    console.log("Acción ejecutada");
  }
}

// Subclase válida: respeta el contrato
class BotonConConfirmacion extends Boton {
  ejecutar() {
    if (confirm("¿Estás seguro?")) {
      console.log("Acción confirmada y ejecutada");
    } else {
      console.log("Acción cancelada");
    }
  }
}

// Subclase inválida: rompe el contrato
class BotonDecorativo extends Boton {
  ejecutar() {
    throw new Error("Este botón es solo decorativo y no ejecuta acciones");
  }
}

// Instanciamos los botones
new Boton("btn1");                 // ✅ Funciona como se espera
new BotonConConfirmacion("btn2"); // ✅ Funciona con confirmación
new BotonDecorativo("btn3");      // ❌ Rompe el contrato, lanza error