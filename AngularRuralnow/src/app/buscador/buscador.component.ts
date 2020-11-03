import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oevents-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  value = 'localizacion';
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
