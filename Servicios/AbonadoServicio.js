export class AbonadoServicio{
    abonadoRepositorio;
    constructor(abonadoRepositorio){
        this.abonadoRepositorio=abonadoRepositorio;
    }

    agregarAbonado(abonado){
        return this.abonadoRepositorio.agregarAbonado(abonado);
    }

    generarId(){
        return Math.floor((Math.random() * (45 - 1) + 1));
    }

    buscarPorDni(dni){
        return this.abonadoRepositorio.buscarPorDni(dni);
    }


}