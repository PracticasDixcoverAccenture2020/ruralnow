import { Component, OnInit } from '@angular/core';

import { Casa } from 'src/app/clases/casa/Casa';
import { ActivatedRoute, Router } from '@angular/router';
import { CasaServiceService } from 'src/app/services/FindCasa-service.service';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'oevents-listado-casas',
  templateUrl: './listado-casas.component.html',
  styleUrls: ['./listado-casas.component.scss']
})

export class ListadoCasasComponent implements OnInit {

  casas: Casa[];

  listaDeCasas: Casa[] = [];

  //constructor(private servicioCasa: CasaServiceService) { }

  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {

    /*this.servicioCasa.findAll().subscribe(data => {
      this.casas = data;
    });*/

    this.httpClient.get("assets/json/casas.json").subscribe(data => {
      console.log(data);

      for(let key of Object.keys(data)){
        let casa: Casa = data[key];
        this.listaDeCasas.push(casa);
      }
    })
  }

}

