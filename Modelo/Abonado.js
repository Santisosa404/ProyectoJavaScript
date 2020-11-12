import { Usuario } from "./Usuario";

export class Abonado extends Usuario {
    dni;
    vehiculo;
    abono;
    constructor(nombre, id, abono, dni, vehiculo) {
        super(nombre, id)
        this.abono = abono;
        this.dni = dni;
        this.vehiculo = vehiculo;
    }



}