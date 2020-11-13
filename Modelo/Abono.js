export class Abono{
    abonado;
    pin;
    tarifa;
    fechaActivacion;
    fechaCancelacion;
    constructor(abonado,pin,tarifa,fechaActivacion,fechaCancelacion){
        this.abonado=abonado;
        this.pin=pin;
        this.tarifa=tarifa;
        this.fechaActivacion=fechaActivacion;
        this.fechaCancelacion=fechaCancelacion;
    }

}