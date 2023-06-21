import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent {
  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      nome: new FormControl(''),
      telefone: new FormControl(''),
      email: new FormControl('', [Validators.required]),
      mensagem: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get mensagem() {
    return this.contactForm.get('mensagem')!;
  }

  submit() {
    if (this.contactForm.invalid) {
      return;
    }
    console.log('DEU CERTO');
  }
}
