import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mailForm } from '../interfaces/mail-form.interface';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2'



const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  enviarEmail(formData: mailForm) {
    console.log('Enviando email');
    Swal.fire('Enviado', 'Email enviado correctamente', 'success');  
    return this.http.post(`${base_url}/send-email`, formData);
  }
}

/* Swal.fire({
  title: 'Enviado',
  text: "Email enviado correctamente",
  icon: 'success',
}).then((result) => {
  if (result) {
    location.reload();
  }
});
*/