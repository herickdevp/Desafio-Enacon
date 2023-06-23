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
      titulo: 'Gestão Financeira',
      instituicao: 'UNOPAR',
    },
    {
      tipo: 'MBA (Cursando)',
      titulo: 'Gestão de Pessoas',
      instituicao: 'UNOPAR',
    },
  ];

  cursos = [
    {
      nomeCurso: 'Angular',
      status: '(Cursando)',
      cargaHoraria: '7h',
    },
    {
      nomeCurso: 'JavaScript ES6',
      status: '(Cursando)',
      cargaHoraria: '37h',
    },
    {
      nomeCurso: 'Flexbox e Grid Layout',
      status: '',
      cargaHoraria: '08h',
    },
    {
      nomeCurso: 'HTML e CSS',
      status: '',
      cargaHoraria: '23h',
    },
    {
      nomeCurso: 'UI Desing',
      status: '',
      cargaHoraria: '17h',
    },
  ];

  linguagens = [
    {
      nomeCurso: 'Angular',
      tempo: '1 mese',
    },
    {
      nomeCurso: 'javaScript',
      tempo: '6 meses',
    },
    {
      nomeCurso: 'Python',
      tempo: '5 meses',
    },
    {
      nomeCurso: 'Java',
      tempo: '5 meses',
    },
    {
      nomeCurso: 'C++',
      tempo: '1 ano',
    },
  ];
}
