import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Poblacion } from '../clases/poblacion/poblacion';
import { Provincia } from '../clases/provincia/provincia';


@Component({
  selector: 'oevents-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit {

  provincias: Provincia[] = [];

  poblaciones: Poblacion[] = [];

  myControl = new FormControl();
  myControlPob = new FormControl();
  optionsProv: string[] = [];
  optionsPob: string[] = [];
  filteredProvs: Observable<string[]>;
  filteredPobls: Observable<string[]>;

  constructor(private httpClient: HttpClient, private router: Router) { }

  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {

    this.filteredProvs = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.optionsProv))
    );

    this.filteredPobls = this.myControlPob.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.optionsPob))
    );

    this.httpClient.get("http://localhost:8080/Provincia/getAll").subscribe(data => {
      console.log(data);

      for (let key of Object.keys(data)) {
        let prov: Provincia = data[key];
        this.provincias.push(prov);

        this.optionsProv.push(prov.provincia);
      }
    });

  }

  onChange(prov: any) {
    console.log(prov);

    

    if (prov !== "") {

      this.optionsPob = [];

      this.httpClient.get("http://localhost:8080/Poblacion/byProvincia/" + prov).subscribe(data => {

        for (let key of Object.keys(data)) {
          let pob: Poblacion = data[key];
          this.poblaciones.push(pob);

          this.optionsPob.push(pob.poblacion);
        }


      });

    }
  }

  gotoHouseList() {
    window.alert("Click ^^");
    this.router.navigate(['/houses']);
  }

}
