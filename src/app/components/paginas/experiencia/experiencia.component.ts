import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent {
  maisInfos: boolean = false;
  onshowElements() {
    this.maisInfos = !this.maisInfos;
  }

  experienicias = [
    {
      dataInicio: '02/2022',
      dataFim: 'Atual',
      empresa: 'TECPOP',
      cargo: 'Coordenador Geral',
      descricao:
        'Coordenar colaboradores para a otimização e melhora das atividades exercidas no polo; Articular com empresas e instituições para obtenção de parcerias; Gerir atividades pedagógicas para o desenvolvimento das capacitações oferecias pelo polo.',
    },
    {
      dataInicio: '03/2019',
      dataFim: '04/2020',
      empresa: 'FAPEMIG',
      cargo: 'Coordenador Geral',
      descricao:
        'Gerir atividades administrativas e pedagógicas; Coordenar planos de ação da equipe; Articular com instituições parceiras com o objetivo de prover as necessidades materiais, de pessoal e de ampliação do polo; Aperfeiçoar política organizacional em busca de desenvolvimento e melhores resultados.',
    },
    {
      dataInicio: '05/2017',
      dataFim: '03/2019',
      empresa: 'FAPEMIG',
      cargo: 'Agente Educacional Tecnológico',
      descricao:
        'Auxiliar administrativo; Elaboração e análise de documentos e planilhas; Manutenção em computadores; Atendimento ao público; Professor de informática.',
    },
  ];

  extras = [
    {
      curso: 'Inglês',
      instituicao: 'Intermediário',
      cargaHoraria: '50 horas',
    },
    {
      curso: 'Excel avançado',
      instituicao: 'UAITEC',
      cargaHoraria: '40 horas',
    },
    {
      curso: 'Word avançado',
      instituicao: 'UAITEC',
      cargaHoraria: '40 horas',
    },
    {
      curso: 'Power Point',
      instituicao: 'UAITEC',
      cargaHoraria: '40 horas',
    },
    {
      curso: 'Informática avançada',
      instituicao: 'Interativa Cursos especializados',
      cargaHoraria: '150 horas',
    },
    {
      curso: 'AutoCAD',
      instituicao: 'MicroWay',
      cargaHoraria: '100 horas',
    },
    {
      curso: 'Home Design',
      instituicao: 'MicroWay',
      cargaHoraria: '50 horas',
    },
    {
      curso: 'Legislação Trabalhista',
      instituicao: 'UAITEC',
      cargaHoraria: '14 horas.',
    },
    {
      curso: 'Departamento Pessoal',
      instituicao: 'UAITEC',
      cargaHoraria: '30 horas',
    },
  ];
}
