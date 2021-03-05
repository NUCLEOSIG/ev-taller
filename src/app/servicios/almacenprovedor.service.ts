import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlmacenprovedorService {

    
  constructor(private http:HttpClient) { 

  }

  getAlmacenProvedor():Observable<any>{
    return this.http.get(`/api/taller/almacen_provedor`);
  }

  crearAlmacenProvedor(almacenprovedor:Object):Observable<any>{
    return this.http.post(`/api/taller/almacen_provedor`,almacenprovedor);
  }

}
