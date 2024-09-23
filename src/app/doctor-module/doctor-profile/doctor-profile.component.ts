import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrl: './doctor-profile.component.css'
})

export class DoctorProfileComponent implements OnInit {
  doctor!: Doctor;

  constructor(private doctorService:DoctorService){ }

  ngOnInit(): void {
      this.doctor= this.doctorService.getDoctor();
  }

}
