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

  //Variables recibidas
  localizacion: String;
  fechaEntrada: Date;
  fechaSalida: Date;
  huespedes: number;


  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.localizacion = this.route.snapshot.paramMap.get('localizacion');
    this.huespedes = Number.parseInt(this.route.snapshot.paramMap.get('huespedes'));
    this.fechaEntrada = new Date(this.route.snapshot.paramMap.get('fechaEntrada'));
    this.fechaSalida = new Date(this.route.snapshot.paramMap.get('fechaSalida'));

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
      this.listaDeCasas.push(casa);
    }
  }

 

}

