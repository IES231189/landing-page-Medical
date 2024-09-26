import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Medical-landing-V0';
  messageSent: boolean = false;


  handleFormSubmit(formData:any):void{
    console.log('Datos del formulario recibidos:' , formData);
    this.messageSent=true;
  }
}
