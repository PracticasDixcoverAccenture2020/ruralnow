import { Component, OnInit } from '@angular/core';
import { Casa } from 'src/app/clases/casa/Casa';
import { Servicios } from 'src/app/clases/servicios/Servicios';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Obj } from '@popperjs/core';

@Component({
  selector: 'oevents-listado-casas',
  templateUrl: './listado-casas.component.html',
  styleUrls: ['./listado-casas.component.scss']
})

export class ListadoCasasComponent implements OnInit {

  casas: Casa[];

  listaDeCasas: Casa[] = [];
  casasDisponibles: Casa[] = [];
  casasDisponiblesId: number[] = [];
  listaServicios: Servicios[] = [];

  localizacion: String;
  huespedes: number;
  fechaEntrada: Date;
  fechaEntradaStr: string;
  fechaSalida: Date;
  fechaSalidaStr: string;

  precioSelec: number = 0;
  piscina: Boolean = false;
  chimenea: Boolean = false;
  barbacoa: Boolean = false;
  cocinaCompleta: Boolean = false;
  aireAcondicionado: Boolean = false;
  acondicionadoNinnos: Boolean = false;
  admiteMascotas: Boolean = false;
  
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.localizacion = this.route.snapshot.paramMap.get('localizacion');
    this.huespedes = Number.parseInt(this.route.snapshot.paramMap.get('huespedes'));
    this.fechaEntrada = new Date(this.route.snapshot.paramMap.get('fechaEntrada'));
    this.fechaSalida = new Date(this.route.snapshot.paramMap.get('fechaSalida'));

    this.updateData();
  }

  private updateData(): void {
    // Lista de casas disponibles a la fecha de entrada dada
    this.httpClient.get("http://localhost:8080/Casa/reserva/" + this.formatDate(this.fechaEntrada)).subscribe(data => {
      for (let key of Object.keys(data)) {
        let casa: Casa = data[key];
        this.casasDisponibles.push(casa);
        this.casasDisponiblesId.push(casa.idcasa);
      }
    })
    
    this.fechaEntradaStr = this.formatDate(this.fechaEntrada);
    this.fechaSalidaStr = this.formatDate(this.fechaSalida);

    if (this.localizacion === "undefined" || this.localizacion === "Cualquiera") {
      this.httpClient.get("http://localhost:8080/Casa/getAll").subscribe(data => {
        //console.log(data);
        this.rellenarLista(data);
      })

      this.localizacion = "Cualquiera";

    } else {
      this.httpClient.get("http://localhost:8080/Casa/byProvincia/" + this.localizacion).subscribe(data => {
        //console.log(data);

        if (Object.keys(data).length > 0) {
          this.rellenarLista(data);
        } else {

          this.httpClient.get("http://localhost:8080/Casa/byPoblacion/" + this.localizacion).subscribe(data => {
            //console.log(data);
            this.rellenarLista(data);
          })

        }
      })
    }
  }

  private rellenarLista(data: Object): void {
    if (Object.keys(data).length > 0) {
      console.log('filling list')

      for (let key of Object.keys(data)) {
        let casa: Casa = data[key];
  
        //Comprobar si están disponibles y el numero de huespedes
        if (this.casasDisponiblesId.includes(casa.idcasa) && casa.personas === this.huespedes)
          this.listaDeCasas.push(casa);
      }
    } else {
      console.log('no data retrieved')
    }
  }


  formatLabel(value: number) {
    this.precioSelec = value;
    return value + "€";
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

  buscar() {
    // Update route without navigate
    this.router.navigate(['/houses', {
      localizacion: this.localizacion,
      huespedes: this.huespedes,
      fechaEntrada: this.fechaEntrada,
      fechaSalida: this.fechaSalida
    }]);
    
    this.casas = []
    this.listaDeCasas = []
    this.casasDisponibles = []
    this.casasDisponiblesId = []

    this.updateData();
  }

  actualizarPrecio() {

  }

  //Procesadores
  procesaFechaSalida(fechaSalida: Date) {
    console.log(fechaSalida);
    this.fechaSalida = fechaSalida;
  }

  procesaFechaEntrada(fechaEntrada: Date) {
    console.log(fechaEntrada);
    this.fechaEntrada = fechaEntrada;
  }
}

