import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';


;
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private doctor:Doctor = {
    name:'Dr.Leonardo Rivera Hernández',
    image: '../../../assets/doctor.png.jpg',
    quote: '“Cuidamos de tu salud con atención especializada y personalizada. Agenda tu cita fácilmente y empieza a recibir el cuidado médico que mereces. Nuestro equipo está listo para ayudarte en cada paso del camino.”',
    description: 'Especialista en cardiología con más de 20 años de experiencia, el Dr. Rivera es un referente en la comunidad médica, dedicado a ofrecer un enfoque integral en el cuidado del corazón. Certificado internacionalmente, asegura que cada paciente reciba la mejor atención posible.'
  }

  getDoctor():Doctor{
    return this.doctor;
  }




}
