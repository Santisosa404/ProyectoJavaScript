import { Ticket } from '../Modelo/Ticket.js';

export class TicketRepositorio {
    listaTickets;
    constructor(listaTickets){
        this.listaTickets=listaTickets;
    }
    generarTicket(vehiculo) {
        let plaza = this.generarPlaza();
        let nuevoTicket=new Ticket(vehiculo.matricula, new Date(), vehiculo.id, plaza);
        this.listaTickets.push(nuevoTicket);
        return nuevoTicket;
    }

    imprimirTicketDeposito(ticket) {
        ticket.pin = this.generarPin();
        console.log(`\nVehiculo con matricula: ${ticket.matricula}`)
        console.log(`Fecha llegada ${ticket.fechaLlegada}`);
        console.log(`Su pin para recoger el vehiculo es ${ticket.pin}\n`);
        console.log(`El numero de la plaza es ${ticket.plaza}`)
       
    }

    imprimirTicketRetirarda(ticket) {
        ticket.fechaLlegada = new Date();
        console.log(`Vehiculo con matricula: ${ticket.matricula}\n`)
        console.log(`Fecha llegada ${ticket.fechaLlegada}`);
        console.log(`Fecha salida ${ticket.fechaSalida}`);
        console.log(`El precio de su estancia es de ${ticket.precio}`);
        console.log(`El numero de la plaza es ${ticket.plaza}`)

    }
    generarPin() {
        return Math.floor((Math.random() * (900000 - 100000) + 100000));
    }
    generarPlaza() {
        return Math.floor((Math.random() * (45 - 1) + 1));
    }

    buscarPorPin(pin){
        for (const i in this.listaTickets) {
            if (this.listaTickets[i].pin == pin) {
                return this.listaTickets[i];                
            }
        }
    }

    /*
        generarPlazas(){
            let listaPlazas = [];
            for(let i=0;i<this.parking.numPlazas;i++){
                listaPlazas[i].push(Math.floor((Math.random()*(45-1)+1)));  
            }
            return listaPlazas;
        }*/

}