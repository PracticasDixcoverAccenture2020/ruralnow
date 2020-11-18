import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule } from '@angular/material';
import { MinFechaSalidaService } from 'src/app/services/min-fecha-salida.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'oevents-select-fecha-entrada',
  templateUrl: './select-fecha-entrada.component.html',
  styleUrls: ['./select-fecha-entrada.component.scss']
})
export class SelectFechaEntradaComponent {

  @Output()
  comunicadorFechaEntrada = new EventEmitter<Date>();

  minDate: Date;
  maxDate: Date;
  opcionSeleccionada: Date;

  constructor(private minFechaSalidaService: MinFechaSalidaService, private route: ActivatedRoute) {
    const currentYear = new Date().getFullYear();
    const dayDate = new Date().getDate();
    const month = new Date().getMonth();
    this.minDate = new Date(currentYear, month, dayDate);
    this.maxDate = new Date(currentYear + 1, 11, 31);

  }

  ngOnInit(): void {
    var argument = this.route.snapshot.paramMap.get('fechaEntrada');
    if (argument != undefined) {
      this.opcionSeleccionada = new Date(argument);
    }
  }

  comunicarFechaEntrada(fechaEntradaSelect: Date) {
    this.comunicadorFechaEntrada.emit(fechaEntradaSelect);
    console.log(fechaEntradaSelect);

    this.minFechaSalidaService.setMinSalida(fechaEntradaSelect);
  }

}
