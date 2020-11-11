export class VehiculoServicio{

    constructor(VehiculoRepositorio){
        this.VehiculoRepositorio = VehiculoRepositorio;
    }

    comprobarPlazas(){
        let numPlazas = VehiculoRepositorio.listaMotocicletas.length()+VehiculoRepositorio.listaCaravanas.lenght+VehiculoRepositorio.listaTurismos.lenght();
        if(numPlazas<43){
            return true;
        }else{
            return false;
        }
    }

    agregarVehiculo(vehiculo){
        return this.VehiculoRepositorio.agregarVehiculo(vehiculo);
    }

}