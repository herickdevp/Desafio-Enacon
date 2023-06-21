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
        'asdyasuydhausyd uays xuas duas duyasduays duyas duyas ud aus duyas ud asud uas duas duya sud as0ud aslkj dkpas dkas kd askd jaks dasasdbjas djas ',
    },
    {
      dataInicio: '02/2022',
      dataFim: 'Atual',
      empresa: 'TECPOP',
      cargo: 'Coordenador Geral',
      descricao:
        'asdyasuydhausyd uays xuas duas duyasduays duyas duyas ud aus duyas ud asud uas duas duya sud as0ud aslkj dkpas dkas kd askd jaks dasasdbjas djas ',
    },
    {
      dataInicio: '02/2022',
      dataFim: 'Atual',
      empresa: 'TECPOP',
      cargo: 'Coordenador Geral',
      descricao:
        'asdyasuydhausyd uays xuas duas duyasduays duyas duyas ud aus duyas ud asud uas duas duya sud as0ud aslkj dkpas dkas kd askd jaks dasasdbjas djas ',
    },
    {
      dataInicio: '02/2022',
      dataFim: 'Atual',
      empresa: 'TECPOP',
      cargo: 'Coordenador Geral',
      descricao:
        'asdyasuydhausyd uays xuas duas duyasduays duyas duyas ud aus duyas ud asud uas duas duya sud as0ud aslkj dkpas dkas kd askd jaks dasasdbjas djas ',
    },
  ];
}
