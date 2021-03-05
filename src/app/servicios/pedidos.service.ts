import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

    
  constructor(private http:HttpClient) { 

  }

  getPedidos():Observable<any>{
    return this.http.get(`/api/taller/pedidos`);
  }

  crearPedidos(pedidos:Object):Observable<any>{
    return this.http.post(`/api/taller/pedidos`,pedidos);
  }

}
