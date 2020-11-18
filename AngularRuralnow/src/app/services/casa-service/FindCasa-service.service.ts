import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Casa } from '../../clases/casa/Casa';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class CasaServiceService {

  private casaLocalizacion: string;
 
  constructor(private http: HttpClient) {
    this.casaLocalizacion = 'http://localhost:8080/users';
  }
 
  public findAll(): Observable<Casa[]> {
    return this.http.get<Casa[]>(this.casaLocalizacion);
  }
 
  public save(casa: Casa) {
    return this.http.post<Casa>(this.casaLocalizacion, Casa);
  }
}
