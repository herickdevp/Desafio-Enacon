import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  ativo: boolean = false;
  handleClick() {
    this.ativo = !this.ativo;
  }
}
