import { Component } from '@angular/core';
import { MpcCardEventoComponent, MpcTabsComponent, Tab } from 'mpc-lib-angular';

/**
 * Interface que representa uma experiência de trabalho.
 * @interface Trabalho
 */
interface Trabalho {
  titulo: string;
  periodo: string;
  empresa: string;
  atividades: string[];
}

@Component({
  selector: 'carreira',
  imports: [MpcCardEventoComponent, MpcTabsComponent],
  templateUrl: './carreira.component.html',
  styleUrls: ['./carreira.component.scss']
})
export class CarreiraComponent {

  /**
   * Lista de trabalhos/experiências profissionais.
   * @type {Trabalho[]}
   */
  protected trabalhos: Trabalho[] = [];

  /**
   * Abas disponíveis na seção de carreira.
   * @type {Tab[]}
   */
  protected abas: Tab[] = [
    { id: 'experiencia-profissional', titulo: 'Profissional' },
    { id: 'formacao-academica', titulo: 'Acadêmica' }
  ];

  /**
   * Aba atualmente selecionada.
   * @type {Tab | undefined}
   */
  protected abaSelecionada?: Tab;

  constructor() {
    this.abaSelecionada = this.abas[0];

    this.trabalhos = [
      {
        titulo: 'Recepcionista',
        periodo: '2015 - 2016',
        empresa: 'Medimagem - Clínica de Diagnóstico por Imagem',
        atividades: [
          'Recepção de pacientes',
          'Atendimento ao cliente',
          'Relatórios',
        ],
      },
      {
        titulo: 'Assistente Administrativo (RH)',
        periodo: '2020 - 2023',
        empresa: 'Medcentro - Distribuidora de Produtos Farmacêuticos',
        atividades: [
          'Formalidades de admissão e demissão',
          'Documentação',
          'Controle de processos',
          'Planejamento de recursos humanos',
        ],
      },
      {
        titulo: 'Auxiliar de Gestão Pessoal (RH)',
        periodo: '2023 - Atualmente',
        empresa: 'Destaque do Norte',
        atividades: [
          'Formalidades de admissão e demissão',
          'Documentação',
          'Controle de processos',
          'Planejamento de recursos humanos',
          'Treinamentos',

        ],
      },
    ];

  }
}
