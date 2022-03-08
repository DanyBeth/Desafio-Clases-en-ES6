import Impuestos from './impuestos.js' ;

export default class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre () {
        return this.nombre;
    }

    set nombre (nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }
    calcularImpuesto() {
        return (((this._impuesto._monto_bruto_anual - this._impuesto._deducciones)/100)*21);
    }
};

