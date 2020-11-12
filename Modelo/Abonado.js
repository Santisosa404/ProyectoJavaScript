import { Usuario } from "./Usuario.js";

export class Abonado extends Usuario {
    dni;
    vehiculo;
    abono;
    numPlaza;
    constructor(nombre, id, abono, dni, vehiculo,numPlaza) {
        super(nombre, id)
        this.abono = abono;
        this.dni = dni;
        this.vehiculo = vehiculo;
        this.numPlaza=numPlaza;
    }
    get getDni(){
        return this.dni;
    }



}