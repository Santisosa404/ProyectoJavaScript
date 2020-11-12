export class AbonadoRepositorio{
    listaAbonados;
    constructor(listaAbonados) {
        this.listaAbonados=listaAbonados;
    }
    /* Dice si existe el abonado */
    existe(dni){
       for (const i in this.listaAbonados) {
           if (this.listaAbonados.dni ==dni) {
               return true;
           }else{
               return false;
           }
       }
    }
    buscarPorDni(dni){
        let devolver;
        this.listaAbonados.forEach(Abonado => {
            if(Abonado.getDni == dni){
                devolver=Abonado;
            }
        });
        return devolver;
    }
    agregarAbonado(abonado){
        return this.listaAbonados.push(abonado);
    }
    



}