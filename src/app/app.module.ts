import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './Header/header-component/header-component.component';
import { DoctorModuleModule } from './doctor-module/doctor-module.module';
import { ClinicModule } from './clinic/clinic.module';
import { ClinicalServicesModule } from './clinical-services/clinical-services.module';
import { ContactoFormComponent } from './Contacto/contacto-form/contacto-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ContactoFormComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DoctorModuleModule,
    ClinicalServicesModule,
    ClinicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
