import { ConApiService } from './../../con-api.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() name: String = '';

  constructor(private conApiService: ConApiService) {}
  Contato() {
    this.conApiService
      .mostrarContato()
      .then((contato) => console.log(contato))
      .catch((error) => console.log('ERROR'));
  }
}
