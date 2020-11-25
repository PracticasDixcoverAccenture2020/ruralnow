import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/clases/persona/persona';

@Component({
  selector: 'oevents-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.scss']
})
export class FormReservaComponent implements OnInit {

  //variables
  idCasa: number;
  fechaEntrada: Date;
  fechaSalida: Date;
  precioTotal: number;

  //datos reserva
  cliente: Persona = new Persona();

  /*nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  fechaNac: Date;*/


  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCasa = Number.parseInt(this.route.snapshot.paramMap.get('idCasa'));
    this.fechaEntrada = new Date(this.route.snapshot.paramMap.get('fechaEntrada'));
    this.fechaSalida = new Date(this.route.snapshot.paramMap.get('fechaSalida'));
    this.precioTotal = Number.parseInt(this.route.snapshot.paramMap.get('precio'));
  }

  confirmarReserva() {
    alert("confirmado");
    console.log(this.cliente);
  }

}
