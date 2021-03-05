import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

    
  constructor(private http:HttpClient) { 

  }

  getAlmacen():Observable<any>{
    return this.http.get(`/api/taller/almacen`);
  }

  crearAlmacen(almacen:Object):Observable<any>{
    return this.http.post(`/api/taller/almacen`,almacen);
  }

}
