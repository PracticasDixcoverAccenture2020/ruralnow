import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Poblacion } from 'src/app/clases/poblacion/poblacion';
import { Provincia } from 'src/app/clases/provincia/provincia';


@Component({
  selector: 'oevents-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit {

  provincias: Provincia[] = [];

  poblaciones: Poblacion[] = [];

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.httpClient.get("http://localhost:8080/Casa/getAll").subscribe(data => {
      console.log(data);

      for (let key of Object.keys(data)) {
        let prov: Provincia = data[key];
        this.provincias.push(prov);
      }
    })

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  gotoHouseList() {
    window.alert("Click ^^");
    this.router.navigate(['/houses']);
  }

}
