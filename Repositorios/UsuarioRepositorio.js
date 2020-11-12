export class UsuarioRepositorio{
    constructor(listaUsuarios){
        this.listaUsuarios = listaUsuarios;
    }
    
    buscarPorVehiculo(vehiculo){
        listaUsuario.forEach(Usuario => {
            if(Usuario.vehiculo == vehiculo){
                return Usuario;
            }
        });
    }
}