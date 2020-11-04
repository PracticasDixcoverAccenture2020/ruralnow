import { Component, OnInit } from '@angular/core';

import { Casa } from 'src/app/clases/casa/Casa';
import { ActivatedRoute, Router } from '@angular/router';
import { CasaServiceService } from 'src/app/services/FindCasa-service.service';

@Component({
  selector: 'oevents-listado-casas',
  templateUrl: './listado-casas.component.html',
  styleUrls: ['./listado-casas.component.scss']
})
export class ListadoCasasComponent implements OnInit {

  casas: Casa[];

  constructor(private servicioCasa: CasaServiceService) { }

  ngOnInit(): void {

    this.servicioCasa.findAll().subscribe(data => {
      this.casas = data;
    });

  }

}

