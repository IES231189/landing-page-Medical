import { Component, OnInit } from '@angular/core';
import { AboutClinicService } from '../service/about-clinic.service';
import { Clinica } from '../models/clinica';

@Component({
  selector: 'app-about-clinic',
  templateUrl: './about-clinic.component.html',
  styleUrl: './about-clinic.component.css'
})
export class AboutClinicComponent implements OnInit {

  services:Clinica[]=[];

  constructor(private clinicServices:AboutClinicService){}

  ngOnInit(): void {
      this.clinicServices.getServices().subscribe((data)=>{
        this.services = data;
      })
  }


}
