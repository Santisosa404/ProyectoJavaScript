export class AbonoServicio{

    generarPin(){
        return Math.floor((Math.random() * (45 - 1) - 1));
    }
}