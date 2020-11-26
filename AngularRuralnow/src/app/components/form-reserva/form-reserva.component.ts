import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/clases/persona/persona';
import { Location } from '@angular/common';
import { Casa } from 'src/app/clases/casa/Casa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reserva } from 'src/app/clases/reserva/reserva';

@Component({
  selector: 'oevents-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.scss']
})
export class FormReservaComponent implements OnInit {

  public form: FormGroup;

  //variables
  idCasa: number;
  casa: Casa = new Casa();
  fechaEntrada: Date;
  fechaEntradaStr: string;
  fechaSalida: Date;
  fechaSalidaStr: string;
  precioTotal: number;

  intento: boolean = false;

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
    private route: ActivatedRoute,
    private _location: Location,
    private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      telefono: ['', Validators.required],
      fechaNac: ['', Validators.required],
      terminos: [false, Validators.required]
    })
  }

  ngOnInit(): void {
    this.idCasa = Number.parseInt(this.route.snapshot.paramMap.get('idCasa'));
    this.fechaEntrada = new Date(this.route.snapshot.paramMap.get('fechaEntrada'));
    this.fechaSalida = new Date(this.route.snapshot.paramMap.get('fechaSalida'));
    this.precioTotal = Number.parseInt(this.route.snapshot.paramMap.get('precio'));

    this.fechaEntradaStr = this.formatDate(this.fechaEntrada);
    this.fechaSalidaStr = this.formatDate(this.fechaSalida);

    this.httpClient.get<Casa>("http://localhost:8080/Casa/byId/" + this.idCasa).subscribe(data => {
      this.casa = data;
    })
  }

  confirmarReserva() {
    this.intento = true;

    //alert("confirmado: " + this.fechaEntrada + " - " + this.fechaSalida + " / Total: " + this.precioTotal);

    console.log(this.form.status);

    if (this.form.valid) {
      console.log(this.form.value);

      let email: string = this.form.value.email;
      let noches: number = this.precioTotal / this.casa.precio_noche;

      let reserva: Reserva = new Reserva();
      reserva.casa = this.casa;
      reserva.usuario = new Persona();
      reserva.usuario.email = email;
      reserva.fecha_inicio = this.fechaEntrada;
      reserva.fecha_fin = this.fechaSalida;
      reserva.importe = this.precioTotal;

      let reservaJSON = JSON.stringify(reserva);

      this.httpClient.post("http://localhost:8080/Reserva/crearReserva", reservaJSON).subscribe();
    }
  }

  routeListado(event: any) {
    event.preventDefault();

    this.router.navigate(['/houses', {
      localizacion: "Cualquiera",
      huespedes: 1,
      fechaEntrada: this.fechaEntrada,
      fechaSalida: this.fechaSalida
    }]);
  }

  goBack(event: any) {
    event.preventDefault();

    this._location.back();
  }

  // Formateo de fechas
  private formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
}
