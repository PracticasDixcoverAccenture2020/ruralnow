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

  huespedControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  numeroSeleccionado: number;

  huespedes: number[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ];
  constructor() { }

  ngOnInit(): void {
  }

  comunicarHuespedes(numeroHuespedes: number){
    this.comunicadorHuespedes.emit(numeroHuespedes);   
    console.log(numeroHuespedes);
  }

}
