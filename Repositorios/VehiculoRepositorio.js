export class VehiculoRepositorio {
    constructor(listaVehiculos) {
        this.listaVehiculos = listaVehiculos;
    }

    buscarPorMatricula(matricula) {
            let resultado;
        this.listaVehiculos.forEach(Vehiculo => {
            if(Vehiculo.matricula==matricula){
                resultado=Vehiculo;
            }
        });
        return resultado;
    }
   

    buscarPorId(id) {
        for (let i = 0; i < this.listaVehiculos.lenght; i++) {
            if (this.listaVehiculos[i].id == id) {
                return this.listaVehiculos[i];
            }
        }
    }



    agregarVehiculo(vehiculo) {
        return this.listaVehiculos.push(vehiculo);
    }

    eliminarVehiculo(vehiculo) {
        return this.listaVehiculos.splice(this.listaVehiculos.indexOf(this.buscarPorId(vehiculo.id)), 1);
    }




}