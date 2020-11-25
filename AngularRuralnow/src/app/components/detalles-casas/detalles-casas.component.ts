import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Casa } from 'src/app/clases/casa/Casa';
import { HttpClient } from "@angular/common/http";
import * as moment from 'moment';
import {Location} from '@angular/common';

@Component({
  selector: 'oevents-detalles-casas',
  templateUrl: './detalles-casas.component.html',
  styleUrls: ['./detalles-casas.component.scss']
})
export class DetallesCasasComponent implements OnInit {

  //variables
  casa: Casa;
  fechaEntrada: Date;
  fechaSalida: Date;
  noches: number;
  precio: number;
  idCasa: number;
  //FechasOcupadas
  fechasOcupadas: string[]=[];

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit(): void {
    //Recogida de parametros
    this.idCasa = Number.parseInt(this.route.snapshot.paramMap.get('idCasa'));

    //Método para obtener casa a partir de id
    this.getCasa();

    //Obtener fechas reservadas de la casa
    //this.getFechasOcupadas();
  }

  /**
   * Volver a la pagina anterior
   */
  back(){
    this._location.back();
  }
  /**
   * Llamada al servidor:
   * Obtener fechas ocupadas de la casa
   */
  private getFechasOcupadas(){
    this.httpClient.get("http://localhost:8080/Casa/byId/" + this.idCasa).subscribe(data => {
      for (let key of Object.keys(data)){
        this.fechasOcupadas.push(data[key].fecha)
      }
    })
  }

  /**
   * Llamada al servidor
   * Obtencion de casa
   */
  private getCasa(){
    this.httpClient.get<Casa>("http://localhost:8080/Casa/byId/" + this.idCasa).subscribe(data => {
      this.casa = data;
      console.log(this.casa);
      

    //Recogida parametros de fecha
    this.fechaEntrada = new Date(this.route.snapshot.paramMap.get('fechaEntrada'));
    this.fechaSalida = new Date(this.route.snapshot.paramMap.get('fechaSalida'));

    //calcular precio
    this.calcularPrecio();
    })
  }

  /**
   * Calcular precio total por noche
   */
  private calcularPrecio(){
    var inicio = moment(this.fechaEntrada);
    var fin = moment(this.fechaSalida);
    var dif = fin.diff(inicio,'days');

    if(dif>0){
      this.noches = dif;
      this.precio = this.noches * this.casa.precio_noche;
    }
  }
  

  /**
   * Procesador fecha salida
   * @param fechaSalida 
   */
  procesaFechaSalida(fechaSalida: Date) {
    console.log(fechaSalida);
    this.fechaSalida = fechaSalida;
    this.calcularPrecio();
  }

  /**
   * Procesador fecha entrada
   * @param fechaEntrada 
   */
  procesaFechaEntrada(fechaEntrada: Date) {
    console.log(fechaEntrada);
    this.fechaEntrada = fechaEntrada;
    this.calcularPrecio();
  }

  //Enruta a detalles de casa
  routeReserva(){
    this.router.navigate(['/reservation',{
      idCasa: this.casa.idcasa,
      fechaEntrada: this.fechaEntrada,
      fechaSalida: this.fechaSalida,
      precio: this.precio 
    }]);
  }

}
