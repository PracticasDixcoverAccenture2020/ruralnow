import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinFechaSalidaService {

  fechaMinSalida: Date;

  constructor() {
    this.fechaMinSalida = new Date();
  }

  public setMinSalida(fechaEntrada: Date) {
    if (new Date(fechaEntrada.getFullYear(), fechaEntrada.getMonth() + 1, 0).getDate() === fechaEntrada.getDate()) {
      this.fechaMinSalida.setDate(1);
      this.fechaMinSalida.setMonth(fechaEntrada.getMonth() + 1);
    } else {
      this.fechaMinSalida.setDate(fechaEntrada.getDate() + 1);
      this.fechaMinSalida.setMonth(fechaEntrada.getMonth());
      this.fechaMinSalida.setFullYear(fechaEntrada.getFullYear());
    }
    //console.log(this.fechaMinSalida);
  }
}
