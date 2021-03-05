import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

   
  constructor(private http:HttpClient) { 

  }

  getVenta():Observable<any>{
    return this.http.get(`/api/taller/ventas`);
  }

  crearVenta(ventas:Object):Observable<any>{
    return this.http.post(`/api/taller/ventas`,ventas);
  }

}
