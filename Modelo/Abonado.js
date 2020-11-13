import { Usuario } from "./Usuario.js";

export class Abonado extends Usuario {
    dni;
    vehiculo;
    abono;
    numPlaza;
    numTarjeta;
    constructor(nombre, id, abono, dni, vehiculo,numPlaza,numTarjeta) {
        super(nombre, id)
        this.abono = abono;
        this.dni = dni;
        this.vehiculo = vehiculo;
        this.numPlaza=numPlaza;
        this.numTarjeta=numTarjeta;
    }
   



}