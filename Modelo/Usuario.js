export class Usuario{
    nombre;
    id;
    constructor(nombre){
        this.nombre=nombre;
    }

    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }

    getId(){
        return this.id;
    }

}