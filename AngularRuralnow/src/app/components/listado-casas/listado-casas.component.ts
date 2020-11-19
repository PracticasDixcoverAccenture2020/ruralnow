import { Component, OnInit } from '@angular/core';
import { Casa } from 'src/app/clases/casa/Casa';
import { Servicio } from 'src/app/clases/servicio/servicio';
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
  listaServicios: Servicio[] = [];

  localizacion: String;
  huespedes: number;
  fechaEntrada: Date;
  fechaEntradaStr: string;
  fechaSalida: Date;
  fechaSalidaStr: string;

  precioSelec: Number = 0;
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
    private route: ActivatedRoute) {

      let serviciosCheck : Array<Boolean> = new Array<Boolean>(
        this.piscina, this.chimenea, this.aireAcondicionado, this.barbacoa,
        this.admiteMascotas, this.acondicionadoNinnos, this.cocinaCompleta
        )
     }

  ngOnInit(): void {

    this.localizacion = this.route.snapshot.paramMap.get('localizacion');
    this.huespedes = Number.parseInt(this.route.snapshot.paramMap.get('huespedes'));
    this.fechaEntrada = new Date(this.route.snapshot.paramMap.get('fechaEntrada'));
    this.fechaSalida = new Date(this.route.snapshot.paramMap.get('fechaSalida'));
    this.precioSelec = new Number(this.route.snapshot.paramMap.get('precioSelec'));


    this.recogerListaServicios();

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


  //Rellena la lista de casas con las condiciones basicas
  private rellenarLista(data: Object): void {
    if (Object.keys(data).length > 0) {
      console.log('filling list')

      for (let key of Object.keys(data)) {
        let casa: Casa = data[key];

        if(this.precioSelec == 0){
          //Comprobar si están disponibles y el numero de huespedes
          if (this.casasDisponiblesId.includes(casa.idcasa) && casa.personas === this.huespedes){
            this.listaDeCasas.push(casa);
          }
          

        }else{
          if (this.casasDisponiblesId.includes(casa.idcasa) && casa.personas === this.huespedes && casa.precio_noche <= this.precioSelec){
            this.listaDeCasas.push(casa);
          }
          

        }
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


  public comprobarPrecioCasas() {

    if (this.precioSelec != 0) {

      if (this.fechaEntrada === null || this.fechaSalida === null || this.huespedes === null) {
        alert("Por favor, rellena todos los campos")

      } else {
        this.router.navigate(['/houses', {
          localizacion: this.localizacion,
          huespedes: this.huespedes,
          fechaEntrada: this.fechaEntrada,
          fechaSalida: this.fechaSalida,
          precioSelec: this.precioSelec
        }]);

        this.casas = []
        this.listaDeCasas = []
        this.casasDisponibles = []
        this.casasDisponiblesId = []

        this.updateData();
      }

    }
  }
  public comprobarChecks(){
    
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

  //Procesadores
  procesaFechaSalida(fechaSalida: Date) {
    console.log(fechaSalida);
    this.fechaSalida = fechaSalida;
  }

  procesaFechaEntrada(fechaEntrada: Date) {
    console.log(fechaEntrada);
    this.fechaEntrada = fechaEntrada;
  }

  private recogerListaServicios(): void {

    this.httpClient.get("http://localhost:8080/Servicio/getAll/").subscribe(data => {
      for (let key of Object.keys(data)) {
        let servicio: Servicio = data[key];
        this.listaServicios.push(servicio);
        console.log(servicio.nombre);
      }
    })

    
  
  }
}



