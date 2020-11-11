export class Vehiculo{
    matricula;
    id;
    tipo;
    usuario;
    constructor(matricula, id,tipo,usuario){
        this.matricula=matricula;
        this.id = id;
        this.tipo=tipo;
        this.usuario=usuario;
    }

    getId(){
        return this.id;
     }
 
    getMatricula(){
         return this.matricula;
     }
     getUsuario(){
         return this.usuario;
     }
 
     getTipo(){
         return this.tipo;
     }
     setUsuario(usuario){
        this.usuario=usuario;
     }
     setMatricula(matricula){
         this.matricula=matricula;
     }
     setId(id){
        this.id=id;
     }
     setTipo(tipo){
         this.tipo=tipo;
     }
}

