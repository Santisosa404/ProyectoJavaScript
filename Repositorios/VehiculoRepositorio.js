 export class VehiculoRepositorio{
    constructor(listaVehiculos){
        this.listaVehiculos = listaVehiculos;
    }

    buscarPorMatricula(matricula){
        for(let i=0;i<this.listaVehiculos.lenght;i++){
            if(this.listaVehiculos[i].matricula.equalsIgnoreCase(matricula)){
                return this.listaVehiculos[i];
            }
        }
    }
    
    buscarPorId(id){
        for(let i=0;i<this.listaVehiculos.lenght;i++){
            if(this.listaVehiculos[i].id == id){
                return this.listaVehiculos[i];
            }
        }
    }
    

   
    agregarVehiculo(vehiculo) {
        return this.listaVehiculos.push(vehiculo);
    }

    eliminarVehiculo(vehiculo){
        return  this.listaVehiculos.splice(this.listaVehiculos.indexOf(this.buscarPorId(vehiculo.id)),1);
    }   

    


}