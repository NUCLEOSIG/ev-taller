import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {

    
  constructor(private http:HttpClient) { 

  }

  getProvedor():Observable<any>{
    return this.http.get(`/api/taller/provedor`);
  }

  crearProvedor(provedor:Object):Observable<any>{
    return this.http.post(`/api/taller/provedor`,provedor);
  }

}
