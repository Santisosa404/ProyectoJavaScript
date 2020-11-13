export class VehiculoServicio{
    VehiculoRepositorio;
    constructor(VehiculoRepositorio){
        this.VehiculoRepositorio = VehiculoRepositorio;
    }


    agregarVehiculo(vehiculo){
        return this.VehiculoRepositorio.agregarVehiculo(vehiculo);
    }

    generarId(){
        return Math.floor(Math.random()*(45-1)-1);
    }

    buscarPorMatricula(matricula){
        return this.VehiculoRepositorio.buscarPorMatricula(matricula);
    }
}