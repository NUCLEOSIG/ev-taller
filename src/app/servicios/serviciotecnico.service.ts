import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciotecnicoService {

  
  constructor(private http:HttpClient) { 

  }

  getServTecnico():Observable<any>{
    return this.http.get(`/api/taller/servicio_tecnico`);
  }

  crearServTecnico(serviciotecnico:Object):Observable<any>{
    return this.http.post(`/api/taller/servicio_tecnico`,serviciotecnico);
  }
}
