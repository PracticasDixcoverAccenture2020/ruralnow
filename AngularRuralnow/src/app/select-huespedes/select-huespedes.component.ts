import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Huesped {
  numero: Number;
}

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

  huespedes: Huesped[] = [
    {numero: 1},
    {numero: 2},
    {numero: 3},
    {numero: 4},
    {numero: 5},
    {numero: 6},
    {numero: 7},
    {numero: 8},
    {numero: 9},
    {numero: 10},
    {numero: 11},
    {numero: 12},
    {numero: 13},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  comunicarHuespedes(numeroHuespedes: number){
    this.comunicadorHuespedes.emit(numeroHuespedes);   
    console.log(numeroHuespedes);
  }

}
