import { Component, OnInit } from '@angular/core';
import { Casa } from 'src/app/clases/casa/Casa';
import { ActivatedRoute, Router } from '@angular/router';
import { CasaServiceService } from 'src/app/services/FindCasa-service.service';


@Component({
  selector: 'oevents-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  
  constructor() {}


  onSubmit() {
  }

  ngOnInit(): void {
  }

}
