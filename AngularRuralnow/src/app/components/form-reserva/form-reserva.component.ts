import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/clases/persona/persona';
import { Location } from '@angular/common';
import { Casa } from 'src/app/clases/casa/Casa';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  minDate: Date;
  maxDate: Date;


  intento: boolean = false;

  //datos reserva
  cliente: Persona = new Persona();


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
      telefono: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])],
      fechaNac: ['', Validators.compose([Validators.required, this.mayorEdadValidatorFactory()])],
      terminos: [false, Validators.required]
    })

    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 11, 31);
    this.maxDate = new Date(currentYear - 17, 0, 0);
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


    if (this.form.valid) {

      let email: string = this.form.value.email;

      let reserva: Reserva = new Reserva();
      reserva.casa = this.casa;
      reserva.usuario = new Persona();
      reserva.usuario.email = email;
      reserva.fecha_inicio = this.fechaEntrada;
      reserva.fecha_fin = this.fechaSalida;
      reserva.importe = this.precioTotal;

      let reservaJSON = JSON.stringify(reserva);

      this.httpClient.post("http://localhost:8080/Reserva/crearReserva", reservaJSON).subscribe();
      alert("¡Reserva confirmada con éxito! En breve recibirá un E-mail.");
      this.router.navigate(['/home']);
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
  private formatDate(date: Date): string {
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

  //Validar mayoría de edad ------------------------------------------
  private mayorEdadValidatorFactory() {
    return function (control: FormControl) {
      let edad: number = FormReservaComponent.calcularEdad(new Date(control.value));
      //console.log(edad);
      if (edad < 18) {
        return {
          mayorEdad: {
            valid: false,
            edad: edad
          }
        }
      }

      return null;
    }
  }

  static calcularEdad(fecha: Date): number {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }

    return edad;
  }

  //---------------------------------------------------------------------

}