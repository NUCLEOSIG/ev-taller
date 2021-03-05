import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

    
  constructor(private http:HttpClient) { 

  }

  getEquipo():Observable<any>{
    return this.http.get(`/api/taller/equipo`);
  }

  crearEquipo(equipo:Object):Observable<any>{
    return this.http.post(`/api/taller/equipo`,equipo);
  }

}
