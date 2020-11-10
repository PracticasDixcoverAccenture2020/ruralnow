import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'oevents-select-fecha-salida',
  templateUrl: './select-fecha-salida.component.html',
  styleUrls: ['./select-fecha-salida.component.scss']
})
export class SelectFechaSalidaComponent implements OnInit {

  @Output()
  comunicadorFechaSalida = new EventEmitter<Date>();

  minDate: Date;
  maxDate: Date;

  opcionSeleccionada: Date;

  constructor() { 
    const currentYear = new Date().getFullYear();
    const dayDate = new Date().getDate();
    const month = new Date().getMonth();
    this.minDate = new Date(currentYear, month, dayDate);
    this.maxDate = new Date(currentYear + 1, 11, 31);

  }

  ngOnInit(): void {
  }

  comunicarFechaSalida(fechaSalidaSelect: Date){
    this.comunicadorFechaSalida.emit(fechaSalidaSelect);   
    console.log(fechaSalidaSelect);
  }

}
