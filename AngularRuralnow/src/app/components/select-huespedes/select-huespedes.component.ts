import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'oevents-select-huespedes',
  templateUrl: './select-huespedes.component.html',
  styleUrls: ['./select-huespedes.component.scss']
})
export class SelectHuespedesComponent implements OnInit {

  @Output()
  comunicadorHuespedes = new EventEmitter<number>();

  numeroSeleccionado: number;

  constructor() { }

  ngOnInit(): void {
    this.numeroSeleccionado = 1;
  }

  comunicarHuespedes(numeroHuespedes: number){
    this.comunicadorHuespedes.emit(numeroHuespedes);   
    console.log(numeroHuespedes);
  }

}
