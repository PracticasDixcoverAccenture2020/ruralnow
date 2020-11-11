import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'oevents-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {


  @Output()
  comunicadorLugar = new EventEmitter<String>();

  lugarSeleccionado: String;

  constructor() {}


  onSubmit() {
  }
 
  ngOnInit(): void {
  }

  comunicarLugar(lugarSelect: String){
    this.comunicadorLugar.emit(lugarSelect);   
    console.log(lugarSelect);
  }

}
