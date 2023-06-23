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
      nome: 'Rede Social Moments',
      ano: '2023',
      descricao:
        'No projeto Portifólio eu trabalhei no desenvolvimento completo do HTML, CSS e JavaScript. Além disso, também realizei toda parte de UI Design',
      funcao: 'Desenvolvedor / Aluno',
      linguagens: 'Angular',
    },
    {
      nome: 'Portifólio Pessoal',
      ano: '2023',
      descricao:
        'No projeto Portifólio eu trabalhei no desenvolvimento completo. Além disso, também realizei toda parte de UI Design',
      funcao: 'Desenvolvedor',
      linguagens: 'Angular',
    },
    {
      nome: 'Bikcraft',
      ano: '2023',
      descricao:
        'No projeto Bikcraft eu trabalhei no desenvolvimento completo do HTML, CSS e JavaScript. Sob orientação e aulas do professor André da Origamid.',
      funcao: 'Desenvolvedor / Aluno',
      linguagens: 'HTML, CSS, JavaScript',
    },
  ];
}
