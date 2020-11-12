import { Usuario } from "./Usuario";

export class Admin extends Usuario{
    admin;
    constructor(nombre,id,admin) {
        super(nombre,id);
        this.admin=admin;
    }
   
}