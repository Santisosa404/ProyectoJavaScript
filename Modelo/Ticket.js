export class Ticket{
    constructor(matricula,fechaLlegada,identificador){
        this.matricula=matricula;
        this.fechaLlegada=fechaLlegada;
        this.identificador=identificador;
    }
    constructor(matricula,fechaLlegada,identificador,fechaSalida,precio){
        this.matricula=matricula;
        this.fechaLlegada=fechaLlegada;
        this.identificador=identificador;
        this.fechaSalida = fechaSalida;
        this.precio=precio;
    }
    
}