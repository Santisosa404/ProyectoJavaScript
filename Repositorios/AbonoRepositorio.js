export class AbonoRepositorio{
   listaAbonos;
   constructor(listaAbonos){
    this.listaAbonos=listaAbonos;
   } 
   
   agregarAbono(abono){
       return this.listaAbonos.push(abono);
   }

   buscarAbonoPorPin(pin){
       let resultado;
       this.listaAbonos.forEach(Abono => {
           if(Abono.pin==pin){
            resultado = Abono;
           }
       });
       return resultado;
   }

}