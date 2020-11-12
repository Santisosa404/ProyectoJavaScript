import { Usuario } from "./Usuario.js";

export class Admin extends Usuario{
    clave;
    constructor(nombre,id,clave) {
        super(nombre,id);
        this.clave=clave;
    }
   

}