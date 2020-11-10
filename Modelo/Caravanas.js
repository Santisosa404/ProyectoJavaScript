
class Caravana{
    constructor(matricula, horaLlegada, horaSalida){
        this.matricula=matricula;
        this.horaLlegada=horaLlegada;
        this.horaSalida=horaSalida;
    }
}

function calcularPago(horaLlegada,horaSalida){
    const tarifacion = 0.45;
    minutosTotales =(horaSalida/60)-(horaLlegada/60);
    return minutosTotales*tarifacion;
}