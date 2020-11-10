import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'oevents-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {


  @Output()
  comunicadorLugar = new EventEmitter<String>();

  lugarSeleccionado: String;

  constructor(private router: Router) {
    
   }


  onSubmit() {
  }
 
  ngOnInit(): void {
  }

  gotoHouseList() {

    window.alert("Click ^^");
    this.router.navigate(['/houses']);

  }

  comunicarLugar(lugarSelect: String){
    this.comunicadorLugar.emit(lugarSelect);   
    console.log(lugarSelect);
  }

}
