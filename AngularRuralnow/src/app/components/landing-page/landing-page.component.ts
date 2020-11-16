import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }





  //Procesadores
  procesaHuespedes(numeroHuespedes: number) {
    this.huespedes = numeroHuespedes;
    console.log(this.huespedes);
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

  compareDateAndGo() {
    if (this,this.huespedes === undefined)
      this.huespedes = 1;

    if (this.fechaEntrada === undefined || this.fechaSalida === undefined || this.huespedes === null) {
      alert("Por favor, rellena todos los campos")
    } else {
      this.router.navigate(['/houses', {
        localizacion: this.localizacion,
        huespedes: this.huespedes,
        fechaEntrada: this.fechaEntrada,
        fechaSalida: this.fechaSalida
      }]);
    }
  }

}
