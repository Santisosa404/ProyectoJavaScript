import { Parking } from './Modelo/Parking.js';
import { Vehiculo } from './Modelo/Vehiculo.js'
import { Plaza } from './Modelo/Plaza.js';
import { Usuario } from './Modelo/Usuario.js';
import * as readline from "readline-sync";
import { VehiculoRepositorio } from './Repositorios/VehiculoRepositorio.js';
import { Ticket } from './Modelo/Ticket.js';
import {TicketRepositorio} from './Repositorios/TicketRepositorio.js';
import {VehiculoServicio} from './Servicios/VehiculoServicio.js';

let listaVehiculos = [];
let matricula = "";
//Vehiculos
let caravana1 = new Vehiculo("56789-F", "Caravana");

//Cliente abonado
let us1 = new Usuario("Santi", true, false, "778738339W");
let turis1 = new Vehiculo("56678-B", 1, "Turismo", us1);
let plaza1 = new Plaza("pruebaLlegada", "pruebaSalida", 1, turis1);


let parkingGeneral = new Parking(listaVehiculos);

let repositorioVehiculo = new VehiculoRepositorio(parkingGeneral.listaVehiculos);
let ticketRepositorio = new TicketRepositorio();
let servicioVehiculo = new VehiculoServicio(repositorioVehiculo);
let opcion =-1;

do {
    console.log("Bienvenido al parking bustillo\nSi tiene abono pulse 1\nSi no lo tiene pulse 2\nAdministracion pulse 3");
     opcion = readline.question();
    switch(opcion){

        //Abonado
        case '1':

            let dni = readline.question("Para identificarse escriba su Dni");
            if (existe) {
                switch (opU) {
                    case 1:
                            matricula = readline.question("Introduzca su matricula");
                            let dni = readline.question("Vuelve a introducir su Dni");
                            VehiculoRepositorio.agregarVehiculo(VehiculoRepositorio.buscarPorMatricula(matricula));
                        break;
                    case 2:
                        
                        break;
                    default:
                        break;
                }
            }
            break;
        //No abonado
        case '2':
            let opU =-1;
            do {
                console.log("Para depositar un vehiculo pulse 1\nPara retirar un vehiculo pulse 2")
                opU = readline.question();
                switch (opU) {
                    case '1':
                        console.log(`Quedan  plazas disponibles`);
                        matricula = readline.question("Para ingresar un vehiculo diga su matricula")
                        let tipo = readline.question("Tipo de vehiculo a ingresar");
                        servicioVehiculo.agregarVehiculo(new Vehiculo(matricula, (Math.random()*(45-1)-1), tipo, null,Math.floor((Math.random()*(45-1)-1))));
                        ticketRepositorio.imprimirTicketDeposito(ticketRepositorio.generarTicket(repositorioVehiculo.buscarPorMatricula(matricula)));
                    break;

                    case '2':
                        matricula = readline.question("Introduzca su matricula");
                        let idPlaza = readline.question("Introduz el numero de plaza");
                        let pin = readline.question("Introduzca el pin de recogida")
                        
                    break;
                    default:
                        break;
                }
            } while (opU != 0)
            break;
        //Admin
        case '3':

            break;

        default:
            console.log(opcion);
            console.log("Este es el default");
        break;
    }
} while (opcion != 0);