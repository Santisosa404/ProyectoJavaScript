import { Parking } from './Modelo/Parking.js';
import { Vehiculo } from './Modelo/Vehiculo.js'
import * as readline from "readline-sync";
import { VehiculoRepositorio } from './Repositorios/VehiculoRepositorio.js';
import { Ticket } from './Modelo/Ticket.js';
import { TicketRepositorio } from './Repositorios/TicketRepositorio.js';
import { VehiculoServicio } from './Servicios/VehiculoServicio.js';
import { ParkingRepositorio } from './Repositorios/ParkingRepositorio.js';
import { AbonadoRepositorio } from './Repositorios/AbonadoRepositorio.js';
import { Abonado } from './Modelo/Abonado.js';
import { AbonoServicio } from './Servicios/AbonoServicio.js';
import { Abono } from './Modelo/Abono.js';
import { AdminRepositorio } from './Repositorios/AdminRepositorio.js';
import { Admin } from './Modelo/Admin.js';




let listaAbonados = [];
let listaVehiculos = [];
let listaTickets = [];
let listaTicketsPagados = [];
let matricula = "";
let listaAdmin=[];

//Ticket
let t1 = new Ticket("56678-B", new Date(2020 - 10 - 10), 2, 3);

//Vehiculos
let turis1 = new Vehiculo("56678-B", 1, "Turismo", null, t1);

let abonoServicio = new AbonoServicio();
//Cliente abonado
let us1 = new Abonado("Santi", 2, true, "77", turis1, 7);
turis1.usuario = us1;
let ab = new Abono(us1, abonoServicio.generarPin());
us1.abono = ab;
let ad1 = new Admin("Angel",3,1234);
//Repositorio
let parkingGeneral = new Parking(listaVehiculos);
let abonadoRepositorio = new AbonadoRepositorio(listaAbonados);
let repositorioVehiculo = new VehiculoRepositorio(parkingGeneral.listaVehiculos);
let ticketRepositorio = new TicketRepositorio(listaTickets);
let servicioVehiculo = new VehiculoServicio(repositorioVehiculo);
let parkingRepositorio = new ParkingRepositorio(parkingGeneral, repositorioVehiculo, ticketRepositorio);
let adminRepositorio = new AdminRepositorio(listaAdmin);
let opcion = -1;
repositorioVehiculo.agregarVehiculo(turis1);
ticketRepositorio.agregarTicket(t1);
abonadoRepositorio.agregarAbonado(us1);
adminRepositorio.agregarAdmin(ad1);
console.log(adminRepositorio.listaAdmin);
do {
    console.log("Bienvenido al parking bustillo\nSi tiene abono pulse 1\nSi no lo tiene pulse 2\nAdministracion pulse 3");
    opcion = readline.question();
    let opA;
    switch (opcion) {

        //Abonado
        case '1':
            do {
                opA = readline.question("Pulse 1 para depositar su vehiculo.\nPulse 2 para retirar su vehiculo\nPulse 0 para salir");
                switch (opA) {

                    case '1':
                        matricula = readline.question("Introduzca su matricula");
                        let dni = readline.question("Introduzca su Dni");
                        let abonadoBuscado = abonadoRepositorio.buscarPorDni(dni);
                        repositorioVehiculo.agregarVehiculo(abonadoBuscado.vehiculo);
                        console.log(`El pin para retirar su vehiculo es: ${abonadoBuscado.abono.pin}`);
                        console.log("Vehiculo ingresado correctamente.\n");
                        break;
                    case '2':
                        matricula = readline.question("Introduzca su matricula");
                        let pinAbono = readline.question("Introduzca su pin");
                        let numPlaza = readline.question("Introduzca su numero de plaza");
                        let vehiculoAbonado = repositorioVehiculo.buscarPorMatricula(matricula);
                        let abonado = abonadoRepositorio.buscarPorNumPlaza(numPlaza);
                        if (abonado.abono.pin == pinAbono) {
                            repositorioVehiculo.eliminarVehiculo(vehiculoAbonado);
                        } else {
                            console.log("Pin de seguridad incorrecto");
                        }
                        break;
                    default:
                        console.log("Numero erroneo");
                        break;
                }
            } while (opA != 0);

            break;
        //No abonado
        case '2':
            let opU = -1;
            do {
                console.log("Para depositar un vehiculo pulse 1\nPara retirar un vehiculo pulse 2")
                opU = readline.question();
                switch (opU) {
                    case '1':
                        matricula = readline.question("Para ingresar un vehiculo diga su matricula")
                        let tipo = readline.question("Tipo de vehiculo a ingresar");
                        servicioVehiculo.agregarVehiculo(new Vehiculo(matricula, Math.floor((Math.random() * (45 - 1) - 1)), tipo, null, Math.floor((Math.random() * (45 - 1) - 1))));
                        ticketRepositorio.imprimirTicketDeposito(ticketRepositorio.generarTicket(repositorioVehiculo.buscarPorMatricula(matricula)));
                        break;

                    case '2':
                        matricula = readline.question("Introduzca su matricula");
                        let idPlaza = readline.question("Introduce el numero de plaza");
                        let pin = readline.question("Introduzca el pin de recogida")
                        if (repositorioVehiculo.buscarPorMatricula(matricula) != null) {
                            console.log(`El precio de la estancia fue de ${parkingRepositorio.precioEstancia(matricula, pin)} €`);
                            repositorioVehiculo.eliminarVehiculo(repositorioVehiculo.buscarPorMatricula(matricula));
                            //Agrego a la lista de tickets pagados
                            listaTicketsPagados.push(ticketRepositorio.buscarPorMatricula(matricula));
                            //Borro el ticket de la lista antigua
                            ticketRepositorio.eliminarTicket(ticketRepositorio.buscarPorMatricula(matricula));
                        } else {
                            console.log("No ha sido posible encontrar su vehiculo");
                        }
                        break;
                    default:
                        break;
                }
            } while (opU != 0)
            break;
        //Admin
        case '3':
            console.log("Para confirmar su identidad introduzca su clave");
            let clave=readline.question();
            if (adminRepositorio.buscarPorClave(clave).clave==clave) {
                let opAd;
                do {
                    console.log(`Bienvenido administrador`);
                    opAd=readline.question("Pulse 1 para ver el estado del parking.\n"
                    +"Pulse 2 para facturación\nPulse 3 para consultar los abonados\n"
                    +"Pulse 4 para ver los abonos\nPulse 5 para la caducidad de los abonos.\n");
                    switch (opAd) {
                        case '1':
                                
                            break;

                        case '2':

                            break;

                        case '3':

                            break;

                        case '4':

                            break;

                        case '5':
                            
                            break;

                        default:
                            
                            break;
                    }
                } while (opAd != 0);
            }else{
                console.log("Inicio de sesion incorrecto.");
                console.log("Reiniciando...");
            }
            break;

        default:
            console.log("Este es el default");
            break;
    }
} while (opcion != 0);