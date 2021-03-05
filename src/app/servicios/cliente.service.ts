import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { 

  }

  getCliente():Observable<any>{
    return this.http.get(`/taller/clientes`);
  }

  crearCliente(cliente:Object):Observable<any>{
    return this.http.post(`/taller/clientes`,cliente);
  }
}
