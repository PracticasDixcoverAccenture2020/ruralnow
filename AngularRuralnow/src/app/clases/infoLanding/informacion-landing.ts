export class InformacionLanding {

  localizacion: String;   
  fechaEntrada: Date;
  fechaSalida: Date;
  huespedes: number;

  setLocalizacion(localizacion: String){
        this.localizacion = localizacion;
  }

    setFechaEntrada(fechaEntrada: Date){
        this.fechaEntrada = fechaEntrada;
    }

    setFechaSalida(fechaSalida: Date){
        this.fechaSalida = fechaSalida;
    }

    setHuespedes(huespedes: number){
        this.huespedes = huespedes;
    }

    getLocalizacion(){
        return this.localizacion;
    }

    getFechaEntrada(){
        return this.fechaEntrada;
    }

    getFechaSalida(){
        return this.fechaSalida;
    }

    getHuespedes(){
        return this.fechaSalida;
    }

}

