import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userName = 'Herick';
  job = 'Desenvolvedor Front-End';
  sectionProjetos = 'Projetos';
  sectionFormacao = 'Formação';
}
