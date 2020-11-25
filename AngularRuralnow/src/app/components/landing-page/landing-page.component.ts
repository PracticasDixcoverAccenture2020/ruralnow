import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Poblacion} from 'src/app/clases/poblacion/poblacion';
import { HttpClient } from "@angular/common/http";
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'oevents-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  myControl = new FormControl()
  municipiosFiltrados: Observable<Poblacion[]>;

  //Variables a pasar
  fechaEntrada: Date;
  fechaSalida: Date;
  huespedes: number;
  localizacion: Poblacion;
  municipios: Poblacion [] = []; 


  constructor(private router: Router,
     private httpClient: HttpClient) {
    
      this.httpClient.get('http://localhost:8080/Poblacion/getAll/').subscribe(data => {
        for (let key of Object.keys(data)) {
          let municipio: Poblacion = data[key];
          this.municipios.push(municipio);
        }
      })
   }
   

  ngOnInit(): void {
    this.municipiosFiltrados = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.poblacion),
      map(poblacion => poblacion ? this._filter(poblacion) : this.municipios.slice())
    );
  }  


  displayFn(municipio: Poblacion): string {
    return municipio && municipio.poblacion ? municipio.poblacion : '';
  }

  private _filter(name: string): Poblacion[] {
    const filterValue = name.toLowerCase();

    return this.municipios.filter(option => option.poblacion.toLowerCase().indexOf(filterValue) === 0);
  }


  //Procesadores
  procesaFechaEntrada(fechaEntrada: Date) {
    console.log(fechaEntrada);
    this.fechaEntrada = fechaEntrada;
  }

  procesaFechaSalida(fechaSalida: Date) {
    console.log(fechaSalida);
    this.fechaSalida = fechaSalida;
  }

  //Emisores

  compareDateAndGo() {
    if (this.huespedes === undefined)
      this.huespedes = 1;

    if (this.fechaEntrada === undefined || this.fechaSalida === undefined || this.huespedes === null) {
      alert("Por favor, rellena todos los campos")
    } else {

      if(this.localizacion == undefined){

        this.router.navigate(['/houses', {
          localizacion: "Cualquiera",
          huespedes: this.huespedes,
          fechaEntrada: this.fechaEntrada,
          fechaSalida: this.fechaSalida
        }]);

      }else{

        this.router.navigate(['/houses', {
          localizacion: this.localizacion.poblacion,
          huespedes: this.huespedes,
          fechaEntrada: this.fechaEntrada,
          fechaSalida: this.fechaSalida
        }]);

      }
    
    }
  }

}
