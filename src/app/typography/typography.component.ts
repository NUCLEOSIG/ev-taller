import { Component, OnInit } from '@angular/core';
import { Cliente } from 'app/modelos/cliente';
import { Equipo } from 'app/modelos/equipo';
import { Servicios } from 'app/modelos/servicios';
import { Tecnico } from 'app/modelos/tecnico';
import { ClienteService } from 'app/servicios/cliente.service';
import { EquipoService } from 'app/servicios/equipo.service';
import { ServiciosService } from 'app/servicios/servicios.service';
import { TecnicoService } from 'app/servicios/tecnico.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  tecnicoArray:Tecnico[] = [];
  clienteArray:Cliente[] = [];
  equiposArray:Equipo[] = [];
  serviciosArray:Servicios[] = [];



  constructor(private tecnicoService:TecnicoService, private clienteService:ClienteService, private equipoService:EquipoService, private serviciosService:ServiciosService) { }

  ngOnInit() {
    this.tecnicoService.getTecnico()
    .subscribe(data=>{
      this.tecnicoArray = data;
    });

    this.clienteService.getCliente()
    .subscribe(data=>{
      this.clienteArray = data;
    });

    this.equipoService.getEquipo()
    .subscribe(data=>{
      this.equiposArray = data;
    });

    this.serviciosService.getServicios()
    .subscribe(data=>{
      this.serviciosArray = data;
    });


  }

  selectedEquipo:Equipo = new Equipo();

  guardarEquipo(){
    this.equipoService.crearEquipo(this.selectedEquipo)
    .subscribe(data=>{
      this.equipoService.getEquipo()
      .subscribe(data=>{
        this.equiposArray = data;
      });
    });
    this.selectedEquipo = new Equipo();
  }

  nuevoEquipo(){
    this.selectedEquipo = new Equipo();
  }

  selectedServicio:Servicios = new Servicios();

  guardarServicio(){
    this.serviciosService.crearServicios(this.selectedServicio)
    .subscribe(data=>{
      this.serviciosService.getServicios()
      .subscribe(data=>{
        this.serviciosArray = data;
      });
    });
    this.selectedServicio = new Servicios();
  }

  nuevoServicio(){
    this.selectedServicio = new Servicios();
  }


}
