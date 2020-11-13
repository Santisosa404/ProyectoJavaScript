export class AbonadoRepositorio{
    listaAbonados;
    constructor(listaAbonados) {
        this.listaAbonados=listaAbonados;
    }
    
    buscarPorNumPlaza(numPlaza){
        let devolver;
        this.listaAbonados.forEach(Abonado => {
            if (Abonado.numPlaza==numPlaza) {
                devolver= Abonado;
            }
        });
        return devolver;
    }

    buscarPorDni(dni){
        let devolver;
        this.listaAbonados.forEach(Abonado => {
            if(Abonado.dni == dni){
                devolver=Abonado;
            }
        });
        return devolver;
    }
    agregarAbonado(abonado){
        return this.listaAbonados.push(abonado);
    }
    



}