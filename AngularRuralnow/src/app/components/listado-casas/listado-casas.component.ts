import { Component, OnInit } from '@angular/core';
import { Casa } from 'src/app/clases/casa/Casa';
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

  //Variables recibidas
  localizacion: String;
  fechaEntrada: Date;
  fechaEntradaStr: string;
  fechaSalida: Date;
  fechaSalidaStr: string;
  huespedes: number;
  precioNoche: number;
  piscina: Boolean = false;
  chimenea: Boolean = false;
  barbacoa: Boolean = false;
  cocinaCompleta: Boolean = false;
  aireAcondicionado: Boolean = false;
  acondicionadoNinnos: Boolean = false;
  admiteMascotas: Boolean = false;


  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.localizacion = this.route.snapshot.paramMap.get('localizacion');
    this.huespedes = Number.parseInt(this.route.snapshot.paramMap.get('huespedes'));
    this.fechaEntrada = new Date(this.route.snapshot.paramMap.get('fechaEntrada'));
    this.fechaSalida = new Date(this.route.snapshot.paramMap.get('fechaSalida'));

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


    if (this.localizacion === "undefined") {

      this.httpClient.get("http://localhost:8080/Casa/getAll").subscribe(data => {
        console.log(data);
        this.rellenarLista(data);
      })

      this.localizacion = "TODO";

    } else {
      this.httpClient.get("http://localhost:8080/Casa/byProvincia/" + this.localizacion).subscribe(data => {
        console.log(data);

        if (Object.keys(data).length > 0) {
          this.rellenarLista(data);
        } else {

          this.httpClient.get("http://localhost:8080/Casa/byPoblacion/" + this.localizacion).subscribe(data => {
            console.log(data);
            if (Object.keys(data).length > 0) {
              this.rellenarLista(data);
            }
          })

        }
      })
    }
  }

  private rellenarLista(data: Object): void {
    for (let key of Object.keys(data)) {
      let casa: Casa = data[key];

      //Comprobar si están disponibles y el numero de huespedes
      if (this.casasDisponiblesId.includes(casa.idcasa) && casa.personas === this.huespedes)
        this.listaDeCasas.push(casa);
    }
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

  procesaPrecioNoche(precioNoche: number) {
    console.log(precioNoche);
    this.precioNoche = precioNoche;
  }

  procesaPiscina(piscina: Boolean) {
    console.log(piscina);
    this.piscina = piscina;
  }

  procesaChimenea(chimenea: Boolean) {
    console.log(chimenea);
    this.chimenea = chimenea;
  }

  procesaBarbacoa(barbacoa: Boolean) {
    console.log(barbacoa);
    this.barbacoa = barbacoa;
  }

  procesaCocinaCompleta(cocinaCompleta: Boolean) {
    console.log(cocinaCompleta);
    this.cocinaCompleta = cocinaCompleta;
  }

  procesaAireAcondicionado(aireAcondicionado: Boolean) {
    console.log(aireAcondicionado);
    this.aireAcondicionado = aireAcondicionado;
  }

  procesaAcondicionadoNinnos(acondicionadoNinnos: Boolean) {
    console.log(acondicionadoNinnos);
    this.acondicionadoNinnos = acondicionadoNinnos;
  }

  procesaAdmiteMascotas(admiteMascotas: Boolean) {
    console.log(admiteMascotas);
    this.admiteMascotas = admiteMascotas;
  }

}

