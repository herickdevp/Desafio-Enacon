import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.css'],
})
export class FormacaoComponent {
  @Input() sectionFormacao: String = '';

  formacoes = [
    {
      tipo: 'Tecnologo',
      titulo: 'Análise e Desenvolvimento de Sistemas',
      instituicao: 'IFTM',
    },
    {
      tipo: 'Tecnologo',
      titulo: 'Análise e Desenvolvimento de Sistemas',
      instituicao: 'IFTM',
    },
    {
      tipo: 'Tecnologo',
      titulo: 'Análise e Desenvolvimento de Sistemas',
      instituicao: 'IFTM',
    },
  ];

  cursos = [
    {
      nomeCurso: 'JavaScript ES6',
      status: '(Cursando)',
      cargaHoraria: '36h',
    },
    {
      nomeCurso: 'JavaScript ES6',
      status: '(Cursando)',
      cargaHoraria: '36h',
    },
    {
      nomeCurso: 'JavaScript ES6',
      status: '(Cursando)',
      cargaHoraria: '36h',
    },
  ];

  linguagens = [
    {
      nomeCurso: 'HTML 5',
      tempo: '1 ano',
    },
  ];
}
