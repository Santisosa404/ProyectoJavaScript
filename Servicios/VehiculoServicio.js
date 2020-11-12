export class VehiculoServicio{

    constructor(VehiculoRepositorio){
        this.VehiculoRepositorio = VehiculoRepositorio;
    }


    agregarVehiculo(vehiculo){
        return this.VehiculoRepositorio.agregarVehiculo(vehiculo);
    }

}