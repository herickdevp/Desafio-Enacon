import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.css'],
})
export class IntroducaoComponent {
  @Input() name: String = '';
  @Input() job: String = '';

  tituloPrincipal = ['tituloPrincipal'];
  introducao = ['introducao'];
}
