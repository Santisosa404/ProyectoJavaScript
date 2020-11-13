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
import moment from 'moment';
import { AbonadoServicio } from './Servicios/AbonadoServicio.js';
import { AbonoRepositorio } from './Repositorios/AbonoRepositorio.js';
import { TicketServicio } from './Servicios/ticketServicio.js';


//Variables 
let listaAbonados = [];
let listaAbonos=[];
let listaVehiculos = [];
let listaTickets = [];
let listaTicketsPagados = [];
let matricula = "";
let listaAdmin = [];
let opcion = -1;
let opA;
let opU = -1;
let opAd;
let opGA;
let opE;



//Modelos
let t1 = new Ticket("56678-B", moment([2020,1,3]).format("MMM Do YY"), 2, 3);
let t2 = new Ticket("1234", moment([2020,4,5]).format("MMM Do YY"), 3, 4);

//Vehiculos

let turis1 = new Vehiculo("56678-B", 1, "Turismo", null, t1);


//Cliente abonado
let us1 = new Abonado("Santi", 2, true, "77", turis1, 7,123456);
turis1.usuario = us1;

let ab = new Abono(us1, 666666,"Anual",moment(),null);
us1.abono = ab;

let ad1 = new Admin("Angel", 3, 1234);
let parkingGeneral = new Parking(listaVehiculos);

//Repositorios
let abonadoRepositorio = new AbonadoRepositorio(listaAbonados);
abonadoRepositorio.agregarAbonado(us1);
let repositorioVehiculo = new VehiculoRepositorio(parkingGeneral.listaVehiculos);
repositorioVehiculo.agregarVehiculo(turis1);
let ticketRepositorio = new TicketRepositorio(listaTickets);
ticketRepositorio.agregarTicket(t1);
let parkingRepositorio = new ParkingRepositorio(parkingGeneral, repositorioVehiculo, ticketRepositorio, abonadoRepositorio);
let adminRepositorio = new AdminRepositorio(listaAdmin);
adminRepositorio.agregarAdmin(ad1);
let abonoRepositorio = new AbonoRepositorio(listaAbonos);

//Servicios
let servicioVehiculo = new VehiculoServicio(repositorioVehiculo);
let abonadoServicio = new AbonadoServicio(abonadoRepositorio);
let abonoServicio = new AbonoServicio(abonoRepositorio);
let ticketServicio = new TicketServicio(ticketRepositorio);
abonoServicio.agregarAbono(ab)
ab.fechaCancelacion=abonoServicio.generarFechaCancelacion(ab);


let ticketPagadoEjemplo=new Ticket("45",moment([2020,1,3]),4545,3);
ticketPagadoEjemplo.fechaSalida=moment([2020,4,5]);
listaTicketsPagados.push(ticketPagadoEjemplo);



do {
    console.log("Bienvenido al parking bustillo\nSi tiene abono pulse 1\nSi no lo tiene pulse 2\nAdministracion pulse 3");
    opcion = readline.question();
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
            if (parkingRepositorio.plazasDisponibles()) {
                do {

                    console.log("Para depositar un vehiculo pulse 1\nPara retirar un vehiculo pulse 2")
                    opU = readline.question();
                    switch (opU) {
                        case '1':
                            matricula = readline.question("Para ingresar un vehiculo diga su matricula")
                            let tipo = readline.question("Tipo de vehiculo a ingresar");
                            servicioVehiculo.agregarVehiculo(new Vehiculo(matricula, servicioVehiculo.generarId(), tipo, null, Math.floor((Math.random() * (45 - 1) - 1))));
                            ticketServicio.imprimirTicketDeposito(ticketServicio.generarTicket(repositorioVehiculo.buscarPorMatricula(matricula)));
                            break;

                        case '2':
                            matricula = readline.question("Introduzca su matricula");
                            let idPlaza = readline.question("Introduce el numero de plaza");
                            let pin = readline.question("Introduzca el pin de recogida")
                            if (repositorioVehiculo.buscarPorMatricula(matricula) != null) {
                                console.log(`El precio de la estancia fue de ${parkingRepositorio.precioEstancia(matricula, pin)} €`);
                                repositorioVehiculo.eliminarVehiculo(repositorioVehiculo.buscarPorMatricula(matricula));
                                //Agrego a la lista de tickets pagados
                                listaTicketsPagados.push(ticketRepositorio.buscarPorPin(pin));
                                //Borro el ticket de la lista antigua
                                ticketRepositorio.eliminarTicket(ticketRepositorio.buscarPorPin(pin));
                            } else {
                                console.log("No ha sido posible encontrar su vehiculo");
                            }
                            break;
                        default:
                            break;
                    }
                } while (opU != 0)
            }else{
                console.log("Disculpe las molestias pero actualmente no quedan plazas disponibles");
            }
            break;
        //Admin
        case '3':
            console.log("Para confirmar su identidad introduzca su clave");
            let clave = readline.question();
            if (adminRepositorio.buscarPorClave(clave).clave == clave) {
                do {
                    console.log(`Bienvenido administrador`);
                    opAd = readline.question("Pulse 1 para ver el estado del parking.\n"
                        + "Pulse 2 para facturación\nPulse 3 para consultar los abonados\n"
                        + "Pulse 4 para gestionar los abonos\nPulse 5 para la caducidad de los abonos.\n");
                    switch (opAd) {
                        case '1':
                                parkingRepositorio.estadoParking();
                            break;

                        case '2':
                            console.log(listaTicketsPagados);
                            console.log("Para ver la facturacion, indique las fechas y horas a buscar");
                            console.log("Nota: Para una ejecucion corecta del programa introduzca las fechas en este formato YYYY-MM-DD hh:mm:ss");
                            let desde=moment(readline.question("Introduzca la primera fecha y la hora: "),"YYYY-MM-DD hh:mm:ss");
                            let hasta=moment(readline.question("Introduzca la segunda fecha y la hora: "),"YYYY-MM-DD hh:mm:ss");
                            parkingRepositorio.facturacion(desde,hasta,listaTicketsPagados);                            
                        break;

                        case '3':
                            do{
                                opGA=readline.question("Pulse 1 para dar de alta a un abonado.\n"
                                +"Pulse 2 para modificar un abonado.\n"
                                +"Pulse 3 para dar de baja a un abonado.\n");
                                switch(opGA){
                                    case '1':
                                            console.log("Introduzca los datos del nuevo abonado");
                                            let nombre = readline.question("Nombre del abonado: ");
                                            let dni = readline.question("Dni del abonado: ");
                                            let numTarjeta=readline.question("Intruzca el numero de tarjeta para el abono: ")
                                            let matricula =readline.question("Matricula del coche: ");
                                            let tipo = readline.question("Tipo de vehiculo: ");
                                            servicioVehiculo.agregarVehiculo(new Vehiculo(matricula,servicioVehiculo.generarId(),tipo,null,null));
                                            let numPlaza=readline.question("Eliga un numero de plaza");
                                            
                                            abonadoServicio.agregarAbonado(new Abonado(nombre,abonadoServicio.generarId(),null,dni,servicioVehiculo.buscarPorMatricula(matricula),numPlaza,numTarjeta));
                                            servicioVehiculo.buscarPorMatricula(matricula).usuario=abonadoServicio.buscarPorDni(dni);
                                            let tarifa=readline.question("Elija la tarifa: Mensual, Trimestral, Semestral, Anual ");
                                            let pin =abonoServicio.generarPin();
                                            abonoServicio.agregarAbono(new Abono(abonadoServicio.buscarPorDni(dni),pin,tarifa,moment(),null));
                                            abonoServicio.buscarPorPin(pin).fechaCancelacion= abonoServicio.generarFechaCancelacion(abonoServicio.buscarPorPin(pin));
                                            abonoServicio.buscarPorPin(pin).abonado=abonadoServicio.buscarPorDni(dni);
                                            console.log("Abonado creado correctamente, disfrute del parking");
                                        break;
                                    case '2':
                                            console.log(abonadoRepositorio.listaAbonados);
                                            let dniE = readline.question("Introduzca el dni del abonado a editar");
                                            if(abonadoServicio.buscarPorDni(dniE).dni==dniE){
                                                do{
                                                    opE=readline.question("Pulse 1 para cambiar los datos personales\nPulse 2 para cambiar la fecha de cancelacion");
                                                    switch (opE) {
                                                        case '1':
                                                            abonadoServicio.buscarPorDni(dniE).nombre= readline.question("Edite el nombre del abonado: ");
                                                            abonadoServicio.buscarPorDni(dniE).numTarjeta= readline.question("Edite el numero de tarjeta para el abono: ")
                                                            abonadoServicio.buscarPorDni(dniE).numPlaza= readline.question("Edite su numero de plaza");
                                                            abonadoServicio.buscarPorDni(dniE).dni= readline.question("Edite el dni del abonado: ");
                                                            break;
                                                        case '2':
                                                            break;
                                                        default:
                                                            console.log("No hay opcion para el numero seleccionado");
                                                            break;
                                                    }
                                                }while(opE)
                                            }else{
                                                console.log("Abonado no encontrado");
                                            }
                                        break;
                                    default:

                                        break;
                                }
                            }while(opGA);
                            console.log("");
                        break;

                        case '4':
                            console.log("TODO");
                        break;
                        case '5':
                            console.log("TODO");
                            break;

                        default:
                            console.log("Numero incorrecto");
                            break;
                    }
                } while (opAd != 0);
            } else {
                console.log("Inicio de sesion incorrecto.");
                console.log("Reiniciando...");
            }
            break;

        default:
            console.log("Numero incorrecto");
            break;
    }
} while (opcion != 0);