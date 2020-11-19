import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

  minDate: Date;
  maxDate: Date;

  fechaEntrada: Date;

  opcionSeleccionada: Date;

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
    //if (fechaSalidaSelect.getMilliseconds() > this.minDate.getMilliseconds())
     // this.opcionSeleccionada = this.minDate;
    //else {
      this.comunicadorFechaSalida.emit(fechaSalidaSelect);
      console.log(fechaSalidaSelect);
    //}
  }

}
