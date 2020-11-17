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
  
  @Output()
  comunicadorHuespedes = new EventEmitter<number>();

  @Output()
  comunicadorPiscina = new EventEmitter<Boolean>();

  @Output()
  comunicadorChimenea = new EventEmitter<Boolean>();

  @Output()
  comunicadorBarbacoa = new EventEmitter<Boolean>();

  @Output()
  comunicadorCocinaCompleta = new EventEmitter<Boolean>();

  @Output()
  comunicadorAireAcondicionado = new EventEmitter<Boolean>();

  @Output()
  comunicadorAcondicionadoNinnos = new EventEmitter<Boolean>();

  @Output()
  comunicadorAdmiteMascotas = new EventEmitter<Boolean>();


  //Variables datos
  precioSelec : number = 0;
  fechaEntrada: Date;
  fechaSalida: Date;
  huespedes: number;
  piscina : Boolean = false;
  chimenea : Boolean = false;
  barbacoa : Boolean = false;
  cocinaCompleta : Boolean = false;
  aireAcondicionado : Boolean = false;
  acondicionadoNinnos: Boolean = false;
  admiteMascotas : Boolean = false;

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

  comunicarHuespedes(huespedes: number){
    this.comunicadorHuespedes.emit(huespedes);
    console.log(huespedes);
  }

  comunicarPiscina(piscina: Boolean){
    this.comunicadorPiscina.emit(piscina);
    console.log(piscina);
  }

  comunicarBarbacoa(barbacoa: Boolean){
    this.comunicadorBarbacoa.emit(barbacoa);
    console.log(barbacoa);
  }
  comunicarChimenea(chimenea: Boolean){
    this.comunicadorChimenea.emit(chimenea);
    console.log(chimenea);
  }
  comunicarCocinaCompleta(cocinaCompleta: Boolean){
    this.comunicadorCocinaCompleta.emit(cocinaCompleta);
    console.log(cocinaCompleta);
  }
  comunicarAireAcondicionado(aireAcondicionado: Boolean){
    this.comunicadorAireAcondicionado.emit(aireAcondicionado);
    console.log(aireAcondicionado);
  }
  comunicarAcondicionadoNinnos(acondicionadoNinnos: Boolean){
    this.comunicadorAcondicionadoNinnos.emit(acondicionadoNinnos);
    console.log(acondicionadoNinnos);
  }
  comunicarAdmiteMascotas(admiteMascotas: Boolean){
    this.comunicadorAdmiteMascotas.emit(admiteMascotas);
    console.log(admiteMascotas);
  }

   //Procesadores

   procesaFechaSalida(fechaSalida: Date) {
    console.log(fechaSalida);
    this.fechaSalida = fechaSalida;
    this.comunicarFechaSalida(this.fechaSalida);
  }

  procesaFechaEntrada(fechaEntrada: Date) {
    console.log(fechaEntrada);
    this.fechaEntrada = fechaEntrada;
    this.comunicarFechaEntrada(this.fechaEntrada);
  }

  procesaHuespedes(huespedes: number) {
    console.log(huespedes);
    this.huespedes = huespedes;
    this.comunicarHuespedes(this.huespedes);
  }


}
