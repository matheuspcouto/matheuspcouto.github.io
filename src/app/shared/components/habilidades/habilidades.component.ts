import { Component } from '@angular/core';

/**
 * Interface que representa uma habilidade.
 * @interface Habilidade
 */
interface Habilidade {
  titulo: string;
  icone: string;
  itens: string[];
}

@Component({
  selector: 'habilidades',
  imports: [],
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent {

  /**
   * Lista de habilidades.
   * @type {Habilidade[]}
   */
  protected habilidades: Habilidade[] = [];

  constructor() {

    this.habilidades = [
      {
        titulo: 'Marketing',
        icone: 'bi bi-megaphone-fill',
        itens: ['Redes Sociais', 'Comunicação Interna e Externa', 'Campanhas Publicitárias', 'Canva'],
      },
      {
        titulo: 'Administração',
        icone: 'bi bi-briefcase-fill',
        itens: ['Gestão de Projetos', 'Organização de Eventos', 'Controle Financeiro', 'Atendimento ao Cliente'],
      },
      {
        titulo: 'Gestão de pessoas',
        icone: 'bi bi-people-fill',
        itens: ['Recrutamento e Seleção', 'Treinamento e Desenvolvimento', 'Avaliação de Desempenho'],
      },
      {
        titulo: 'Treinamentos',
        icone: 'bi bi-trophy-fill',
        itens: ['Planejamento de Treinamentos', 'Execução de Treinamentos', 'Avaliação de Resultados'],
      },
      {
        titulo: 'Planejamento Estratégico',
        icone: 'bi bi-graph-up-arrow',
        itens: ['Análise de Cenários', 'Definição de Metas', 'Monitoramento de Resultados'],
      },
    ];
  }
}
