import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './Header/header-component/header-component.component';
import { DoctorModuleModule } from './doctor-module/doctor-module.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DoctorModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
