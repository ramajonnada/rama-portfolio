import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  invalidString: string = '';
  year: number = new Date().getFullYear();
  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.min(1), Validators.max(40)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('')
  })

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(e => console.log('formgroup', e));
  }

  $$submit(e: Event): void {
    e.preventDefault();
    emailjs.sendForm('service_554nlg8', 'template_cjqdd4o', e.target as HTMLFormElement, 'hywfQLe_tsVeQoRh5')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Email sent successfully!');
        this.formGroup.patchValue({ name: '', mail: '', message: '' });
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email. Please try again later.');
      });
  }

}
