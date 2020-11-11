import { Component, OnInit } from '@angular/core';

import { Casa } from 'src/app/clases/casa/Casa';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { InformacionLanding } from 'src/app/clases/infoLanding/informacion-landing';

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
  infoRecivida: InformacionLanding
  //constructor(private servicioCasa: CasaServiceService) { }

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {

    /*this.servicioCasa.findAll().subscribe(data => {
      this.casas = data;
    });*/

    console.log(this.infoRecivida.getLocalizacion());

   

    this.httpClient.get("http://localhost:8080/Casa/getAll").subscribe(data => {

      console.log(data);

      for(let key of Object.keys(data)){
        let casa: Casa = data[key];
        this.listaDeCasas.push(casa);
      }
    })

  }
}

