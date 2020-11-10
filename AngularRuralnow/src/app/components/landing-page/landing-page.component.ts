import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oevents-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  procesaHuespedes(numeroHuespedes: number) {
    console.log(numeroHuespedes);
  }

  procesaFechaEntrada(fechaEntrada: Date) {
    console.log(fechaEntrada);
  }

  procesaFechaSalida(fechaSalida: Date) {
    console.log(fechaSalida);
  }
}
