import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrl: './contacto-form.component.css'
})

export class ContactoFormComponent {
   contactForm: FormGroup;

   @Output() formSubmitted = new EventEmitter<any>();

  constructor( private fb:FormBuilder){
    this.contactForm = this.fb.group({
      name:['',[Validators.required]],
      email:['' , [Validators.required , Validators.email]],
      message:['',[Validators.required , Validators.minLength(20)]]
    })
  }

  onSubmit(){
    if(this.contactForm.valid){
      this.formSubmitted.emit(this.contactForm.value);
      this.contactForm.reset();
    }
  }


}
