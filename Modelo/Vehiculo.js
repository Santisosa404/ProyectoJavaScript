export class Vehiculo{
    constructor(matricula, id,tipo){
        this.matricula=matricula;
        this.id = id;
        this.tipo=tipo;
    }

    get id(){
        return this.id;
     }
 
    get matricula(){
         return this.matricula;
     }
 
     get tipo(){
         return this.tipo;
     }
}

