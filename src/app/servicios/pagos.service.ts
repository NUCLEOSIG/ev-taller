import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

    
  constructor(private http:HttpClient) { 

  }

  getPagos():Observable<any>{
    return this.http.get(`/api/taller/pagos`);
  }

  crearPagos(pagos:Object):Observable<any>{
    return this.http.post(`/api/taller/pagos`,pagos);
  }

}
