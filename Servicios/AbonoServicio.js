import moment from 'moment';

export class AbonoServicio {
    abonoRepositorio;
    constructor(abonoRepositorio) {
        this.abonoRepositorio = abonoRepositorio;
    }

    generarPin() {
        return Math.floor((Math.random() * (45 - 1) - 1));
    }

    agregarAbono(abono) {
        return this.abonoRepositorio.agregarAbono(abono);
    }

    generarFechaCancelacion(abono) {
        let fecha =abono.fechaActivacion.format("YYYY-MM-DD hh:mm:ss");
        let fechaV = moment(fecha,"YYYY-MM-DD");
        if (abono.tarifa == "Mensual") {
            return fechaV.add(6, 'months');
        } else if (abono.tarifa == "Trimestral") {
            return fechaV.add(6, 'months');
        } else if (abono.tarifa == "Semestral") {
            return fechaV.add(6, 'months');
        } else if (abono.tarifa == "Anual") {
            return fechaV.add(1, 'y');
        }
    }
    buscarPorPin(pin) {
        return this.abonoRepositorio.buscarAbonoPorPin(pin);
    }
}