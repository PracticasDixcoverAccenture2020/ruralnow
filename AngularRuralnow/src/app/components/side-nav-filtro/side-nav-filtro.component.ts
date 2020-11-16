import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'oevents-side-nav-filtro',
  templateUrl: './side-nav-filtro.component.html',
  styleUrls: ['./side-nav-filtro.component.scss']
})
export class SideNavFiltroComponent implements OnInit {

  //Variables de comunicadores
  @Output()
  comunicadorPrecioNoche = new EventEmitter<number>();

  @Output()
  comunicadorFechaEntrada = new EventEmitter<Date>();

  @Output()
  comunicadorFechaSalida = new EventEmitter<Date>();

  //Variables datos
  precioSelec : number = 0;
  fechaEntrada: Date;
  fechaSalida: Date;

  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    this.precioSelec = value;
    return value + "€";
  }

 

  //Funciones de comunicadores
  comunicarPrecionoche(precioNoche: number){
    this.comunicadorPrecioNoche.emit(precioNoche);   
    console.log(precioNoche);
  }

  comunicarFechaEntrada(fechaEntradaSelect: Date){
    this.comunicadorFechaEntrada.emit(fechaEntradaSelect);   
    console.log(fechaEntradaSelect);
  }

  comunicarFechaSalida(fechaSalidaSelect: Date){
    this.comunicadorFechaSalida.emit(fechaSalidaSelect);   
    console.log(fechaSalidaSelect);
  }

   //Procesadores
  
   procesaFechaSalida(fechaSalida: Date) {
    console.log(fechaSalida);
    this.fechaSalida = fechaSalida;
    this.comunicarFechaSalida(this.fechaSalida)
  }

  procesaFechaEntrada(fechaEntrada: Date) {
    console.log(fechaEntrada);
    this.fechaEntrada = fechaEntrada;
    this.comunicarFechaEntrada(this.fechaEntrada)
  }


}
