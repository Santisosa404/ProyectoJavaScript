import * as Automovil from './Automovil.js'

export class Plaza{
    constructor(horaLlegada,horaSalida,identificador){
        this.horaLlegada=horaLlegada;
        this.horaSalida = horaSalida;
        this.identificador = identificador;
    }

}

function calcularPago(horaLlegada,horaSalida, tipo){
    if(tipo.equalsIgnoreCase("Motocicleta")){
        let tarifacion=0.08;
    }else if(tipo.equalsIgnoreCase("Caravana")){
        let tarifacion=0.45;
    }else if(tipo.equalsIgnoreCase("Turismo")){
        let tarifacion=0.12;
    }
    minutosTotales =(horaSalida/60)-(horaLlegada/60);
    return minutosTotales*tarifacion;
}