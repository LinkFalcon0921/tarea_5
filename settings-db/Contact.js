class Contact {
  constructor(name = "", apellido = "", telefono = "") {
    this._name = name;
    this._apellido = apellido;
    this._telefono = telefono;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  get apellido() {
    return this._name;
  }

  set telefono(telefono) {
    //the pattern (ddd ddd dddd) with out spaces
    if (telefono.length == 10) {
      this.telefono =
        telefono.substring(0, 3) +
        '-'+
        telefono.substring(3, 6) +
        '-'+
        telefono.substring(6);
    }

    //if includes ddd-ddd-dddd
    if (telefono.length == 12 && telefono.includes("-")) {
      this._telefono = telefono;
    }
  }

  get telefono() {
    return this._telefono;
  }

  getContact() {
    return {
      nombre: this._name,
      apellido: this._apellido,
      telefono: this._telefono,
    };
  }
}

//Done and tested!!!

module.exports = { Contact }