export class AdminRepositorio{
    listaAdmin;
    constructor(listaAdmin){
        this.listaAdmin = listaAdmin;
    }

    buscarPorClave(clave){
        let resultado;
        this.listaAdmin.forEach(Admin => {
            if(Admin.clave == clave){
                resultado= Admin;
            }
        });
        return resultado;
    }

    agregarAdmin(admin){
        return this.listaAdmin.push(admin);
    }

    

}