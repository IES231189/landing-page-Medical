import { Component, OnInit } from '@angular/core';
import { MedicalService } from '../models/medical-service';
import { MedicalServicesService } from '../service/medical-services.service';

@Component({
  selector: 'app-services-components',
  templateUrl: './services-components.component.html',
  styleUrl: './services-components.component.css'
})
export class ServicesComponentsComponent implements OnInit{

  services:MedicalService[]=[];

  constructor(private medicalService:MedicalServicesService){}

  ngOnInit(): void {
      this.medicalService.getServices().subscribe((data)=>{
        this.services = data;
      })
  }


}
