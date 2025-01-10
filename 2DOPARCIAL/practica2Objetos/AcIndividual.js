class Conductor {
  #licencia;

  constructor(nombre, licencia) {
    this.nombre = nombre;
    this.#licencia = licencia;
    this.rutas = [];
  }

  registrar_ruta(ruta) {
    this.rutas.push(ruta);
  }

  recuperar_historial_de_rutas() {
    return this.rutas;
  }

  get licencia() {
    return this.#licencia;
  }

}

class Vehiculo {
  constructor(modelo, placa) {
    this.modelo = modelo;
    this.placa = placa;
    this.estado = 'disponible';
  }

  asignar_conductor(conductor) {
    if (this.estado === 'disponible') {
      this.conductor = conductor;
      this.estado = 'ocupado';
    } else {
      console.log('El vehículo ya está asignado.');
    }
  }

  liberar_vehiculo() {
    this.conductor = null;
    this.estado = 'disponible';
  }
}

class ConductorVIP extends Conductor {
  constructor(nombre, licencia, beneficiosVIP) {
    super(nombre, licencia);
    this.beneficiosVIP = beneficiosVIP;
  }

  asignar_vehiculo_preferencial(vehiculo) {
    if (vehiculo.estado === 'disponible') {
      vehiculo.asignar_conductor(this);
    } else {
      console.log('El vehículo preferido no está disponible.');
    }
  }
}  