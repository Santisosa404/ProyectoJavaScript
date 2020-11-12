export class Ticket{
    fechaSalida;
    precio;
    matricula;
    fechaLlegada;
    identificador;
    pin;
    plaza;
    constructor(matricula,fechaLlegada,identificador,plaza){
        this.matricula=matricula;
        this.fechaLlegada=fechaLlegada;
        this.identificador=identificador;
        this.plaza=plaza;
    }

    

    
}