import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

    
  constructor(private http:HttpClient) { 

  }

  getServicios():Observable<any>{
    return this.http.get(`/api/taller/servicios`);
  }

  crearServicios(servicios:Object):Observable<any>{
    return this.http.post(`/api/taller/servicios`,servicios);
  }

}
