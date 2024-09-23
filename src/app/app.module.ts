import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutClinicComponent } from './Clinica/about-clinic/about-clinic.component';
import { ServicesMedicalComponentComponent } from './Medical_services/services-medical-component/services-medical-component.component';
import { ProfileDoctorComponent } from './DoctorModule/profile-doctor/profile-doctor.component';
import { DoctorProfileComponent } from './DoctorModule/doctor-profile/doctor-profile.component';
import { HeaderComponentComponent } from './Header/header-component/header-component.component';
import { ContactoFormComponent } from './Contacto/contacto-form/contacto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutClinicComponent,
    ServicesMedicalComponentComponent,
    ProfileDoctorComponent,
    DoctorProfileComponent,
    HeaderComponentComponent,
    ContactoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
