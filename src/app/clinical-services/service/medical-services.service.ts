import { Injectable } from '@angular/core';
import { MedicalService } from '../models/medical-service';
import { Observable , of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MedicalServicesService {

  private services:MedicalService[] =[
    {id:1 , name:'Consulta Cardiológica' ,description:'Evaluación completa del corazón.', price:120},
    {id:2 , name:'Cirugía de Corazón' ,description:'Procedimiento quirúrgico para enfermedades cardíacas.', price:200},
    {id:3 , name:'Chequeos Preventivos' , description:'Exámenes integrales para detectar a tiempo problemas cardíacos.', price:140},
    {id:4 , name:'Cirugía de Colocación de Marcapasos' , description:'Procedimientos quirúrgicos avanzados con el equipo más moderno.' , price:70000}

  ]

  constructor( ) { }

  getServices(): Observable<MedicalService[]> {
    return of(this.services);
  }



}
