import { Component } from '@angular/core';
import { MpcCardEventoComponent, MpcTabsComponent, Tab } from 'mpc-lib-angular';

interface Trabalho {
  titulo: string;
  mesEntrada: string;
  anoEntrada: string;
  empresa: string;
  atividades: string[];
}

@Component({
  selector: 'carreira',
  standalone: true,
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
    { id: 'experiencia-profissional', titulo: 'Experiência Profissional' },
    { id: 'formacao-academica', titulo: 'Formação Acadêmica' }
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
        titulo: 'Estágio',
        mesEntrada: 'JAN',
        anoEntrada: '2019',
        empresa: 'Secretaria de Desenvolvimento Econômico e Emprego - SEDEM',
        atividades: [
          'Suporte de Hardware e Software',
          'Administração de Alvarás para Empresas',
          'Relatórios',
        ],
      },
      {
        titulo: 'Desenvolvedor Back-End',
        mesEntrada: 'MAR',
        anoEntrada: '2021',
        empresa: 'Eco Açú Tecnologia',
        atividades: [
          'Desenvolvimento e Manutenção de Sistemas de Administração Pública',
          'Gestão e Importação de Banco de Dados',
          'Relatórios em Jasper',
        ],
      },
      {
        titulo: 'Desenvolvedor Fullstack',
        mesEntrada: 'NOV',
        anoEntrada: '2021',
        empresa: 'Capgemini Brasil S/A',
        atividades: [
          'Desenvolvimento e Manutenção de Sistemas Bradesco (Pix, Open Finance e Recarga de Celular)',
          'Supervisão de desenvolvedores júnior',
          'CI/CD',
        ],
      },
      {
        titulo: 'Desenvolvedor Fullstack',
        mesEntrada: 'OUT',
        anoEntrada: '2025',
        empresa: 'NAVA',
        atividades: [
          'Desenvolvimento e Manutenção de Sistemas Bradesco (Bradesco Seguros)',
          'Supervisão de desenvolvedores júnior',
          'CI/CD',
        ],
      },
    ];

  }
}
