import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

    
  constructor(private http:HttpClient) { 

  }

  getFacturas():Observable<any>{
    return this.http.get(`/api/taller/facturas`);
  }

  crearFacturas(facturas:Object):Observable<any>{
    return this.http.post(`/api/taller/facturas`,facturas);
  }

}
