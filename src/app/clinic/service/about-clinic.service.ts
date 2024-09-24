import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clinica } from '../models/clinica';

@Injectable({
  providedIn: 'root'
})
export class AboutClinicService {

  private clinica:Clinica[]=[
    {title:'Dirección' , description:'Av. Tercera Sur Pte. 312, Nambariti, 29150 Tuxtla, Chis.' ,icon:'../../../../assets/marcador.svg',buttonLabel:'ver Mapa en google'},
    {title:'Horarios' , description:'Lunes a Viernes, 9 AM - 5 PM' ,icon:'../../../../assets/calendario-reloj.svg' , buttonLabel:'Ver calendario en google'},
    {title:'Certificaciones y Experiencia' , description:'Más de 10 años de experiencia.' , icon:'../../../../assets/comprobacion-del-circulo-de-notas.svg' , buttonLabel:'ver Certificaciones' },
  ]

  constructor() { }

  getServices(): Observable<Clinica[]>{
    return of(this.clinica)
  }

}
