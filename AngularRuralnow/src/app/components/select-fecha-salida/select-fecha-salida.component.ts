import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MinFechaSalidaService } from 'src/app/services/min-fecha-salida.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'oevents-select-fecha-salida',
  templateUrl: './select-fecha-salida.component.html',
  styleUrls: ['./select-fecha-salida.component.scss']
})
export class SelectFechaSalidaComponent implements OnInit {

  @Output()
  comunicadorFechaSalida = new EventEmitter<Date>();

    //Parámetro de componente padre con fechas reservadas
    @Input() fechaOcupada: string[] = [];

    minDate: Date;
    maxDate: Date;
  
    fechaEntrada: Date;
  
    opcionSeleccionada: Date;

    //filtro para inhabilitar las fechas reservadas en matdatepicker
    myFilter = (d: Date): boolean => {
  
      let date: any;
      let month: any;
  
      if (d.getDate().toString().length < 2) {
          date = '0' + d.getDate().toString()
      } else {
          date = d.getDate().toString()
      }
  
      if ((d.getMonth() + 1).toString().length < 2) {
          month = '0' + (d.getMonth() + 1).toString()
      } else {
          month = (d.getMonth() + 1).toString()
      }
  
      const day = d.getFullYear().toString() + "-" + month + "-" + date;
      
      return !this.fechaOcupada.includes(day);
  }

  constructor(private minFechaSalidaService: MinFechaSalidaService, private route: ActivatedRoute) {
    const currentYear = new Date().getFullYear();
    const dayDate = new Date().getDate();
    const month = new Date().getMonth();
    //this.opcionSeleccionada = this.minFechaSalidaService.fechaMinSalida;
    this.minDate = this.minFechaSalidaService.fechaMinSalida;
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
    var argument = this.route.snapshot.paramMap.get('fechaSalida');
    if (argument != undefined) {
      this.opcionSeleccionada = new Date(argument);
    }
  }

  comunicarFechaSalida(fechaSalidaSelect: Date) {

    this.comunicadorFechaSalida.emit(fechaSalidaSelect);
    console.log(fechaSalidaSelect);
    
  }

}
