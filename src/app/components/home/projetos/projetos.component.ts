import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent {
  @Input() sectionProjetos: String = '';

  projetos = [
    {
      nome: 'Portifólio Pessoal',
      ano: '2023',
      descricao:
        'No projeto Portifólio eu trabalhei no desenvolvimento completo do HTML, CSS e JavaScript. Além disso, também realizei toda parte de UI Design',
      funcao: 'Aluno',
      linguagens: 'HTML, CSS, JavaScript',
    },
    {
      nome: 'Portifólio Pessoal',
      ano: '2023',
      descricao:
        'No projeto Portifólio eu trabalhei no desenvolvimento completo do HTML, CSS e JavaScript. Além disso, também realizei toda parte de UI Design',
      funcao: 'Aluno',
      linguagens: 'HTML, CSS, JavaScript',
    },
    {
      nome: 'Portifólio Pessoal',
      ano: '2023',
      descricao:
        'No projeto Portifólio eu trabalhei no desenvolvimento completo do HTML, CSS e JavaScript. Além disso, também realizei toda parte de UI Design',
      funcao: 'Aluno',
      linguagens: 'HTML, CSS, JavaScript',
    },
  ];
}
