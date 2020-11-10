class Motocicleta{
    constructor(matricula, horaLlegada, horaSalida){
        this.matricula=matricula;
        this.horaLlegada=horaLlegada;
        this.horaSalida=horaSalida;
    }
}

function calcularPago(horaLlegada,horaSalida){
    const tarifacion = 0.08;
    minutosTotales =(horaSalida/60)-(horaLlegada/60);
    return minutosTotales*tarifacion;
}