import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformacionLanding } from 'src/app/clases/infoLanding/informacion-landing';
@Component({
  selector: 'oevents-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  //Variables a pasar
  localizacion: String;
  fechaEntrada: Date;
  fechaSalida: Date;
  huespedes: number;


  constructor(private router: Router, private infoPasar: InformacionLanding) { }

  ngOnInit(): void {
  }

  //Procesadores
  procesaHuespedes(numeroHuespedes: number) {
    console.log(numeroHuespedes);
    this.huespedes = numeroHuespedes;
  }

  procesaFechaEntrada(fechaEntrada: Date) {
    console.log(fechaEntrada);
    this.fechaEntrada = fechaEntrada;
  }

  procesaFechaSalida(fechaSalida: Date) {
    console.log(fechaSalida);
    this.fechaSalida = fechaSalida;
  }

   procesaLugar(lugarSelect: String) {
    console.log(lugarSelect);
    this.localizacion = lugarSelect;
  }


  //Emisores
  enviarMensaje(){
    this.router.navigate(['/houses']);
    this.infoPasar.setLocalizacion(this.localizacion);
    this.infoPasar.setFechaEntrada(this.fechaEntrada);
    this.infoPasar.setFechaSalida(this.fechaSalida);
    this.infoPasar.setHuespedes(this.huespedes);
  }
}
