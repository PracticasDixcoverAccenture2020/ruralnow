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

   compareDateAndGo()
  {


    if (this.fechaEntrada == undefined || this.fechaSalida == undefined || this.huespedes == undefined){
      alert("Por favor, rellena todos los campos")
    }

    if (this.fechaEntrada.getDay() == this.fechaSalida.getDay()) {

      this.router.navigate(['/houses', {
        localizacion: this.localizacion, 
        huespedes: this.huespedes,
        fechaEntrada: this.fechaEntrada, 
        fechaSalida : this.fechaSalida
      }]);

    } else if (this.fechaEntrada.getDay() > this.fechaSalida.getDay()){

       alert("La fecha de entrada no puede ser posterior a la de salida");

    } else if (this.fechaEntrada.getDay() < this.fechaSalida.getDay()){

       this.router.navigate(['/houses', {
        localizacion: this.localizacion, 
        huespedes: this.huespedes,
        fechaEntrada: this.fechaEntrada, 
        fechaSalida : this.fechaSalida
      }]);

    }
  }

}
