import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public formSubmitted = false;

  public emailForm = this.fb.group({
    subject: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    text: ['', [Validators.required, Validators.maxLength(30)]]
  });

  constructor(private fb: FormBuilder, private emailService: ServiceService, private router: Router) { }


  // capturar la informacion del mail
  sendEmail() {
    this.formSubmitted = true;
    console.log(this.emailForm.value);

    if(this.emailForm.invalid) {
      return;
    }

    // Realizar el envio de mail
    this.emailService.enviarEmail(this.emailForm.value) // aqui enviamos toda la data del formulario
          .subscribe(resp => {
            console.log('Email Enviado');
            console.log(resp);
          }, (err) => {
            // if we have an error
            Swal.fire('Error', err.error.msg, 'error');
          });

          // this.router.navigateByUrl('/home');
          // this.router.initialNavigation;

  }

  // validaciones
  campoNoValido(campo: string): boolean {
      if (this.emailForm.get(campo)?.invalid && this.formSubmitted) {
        return true;
      } else {
        return false;
      }
  }
}
