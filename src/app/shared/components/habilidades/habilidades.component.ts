import { Component } from '@angular/core';

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
    const BACK_END = [
      '> Java',
      '- SpringBoot',
      '- JSF | JPA',
      '> NodeJS',
      '- ExpressJS | TypeScript',
    ];

    const FRONT_END = [
      '> HTML & CSS',
      '> Bootstrap',
      '> JavaScript',
      '- Angular',
    ];

    const BANCO_DADOS = [
      '> PostgreSQL',
      '> SQL Server',
      '> MySQL',
      '> MongoDB',
    ];

    const DEVOPS = ['> Git', '- Github | Bitbucket', '> Jira, Confluence & Bamboo', '> Azure', '> SonarQube'];

    const TESTES = ['> JUnit', '> Jest', '> Mockito', '> Postman', '> Json Server'];

    this.habilidades = [
      {
        titulo: 'Back-End',
        icone: 'bi bi-braces',
        itens: BACK_END,
      },
      {
        titulo: 'Front-End',
        icone: 'bi bi-code-slash',
        itens: FRONT_END,
      },
      {
        titulo: 'Banco de Dados',
        icone: 'bi bi-database',
        itens: BANCO_DADOS,
      },
      {
        titulo: 'Testes',
        icone: 'bi bi-tools',
        itens: TESTES,
      },
      {
        titulo: 'DevOps & Agile',
        icone: 'bi bi-git',
        itens: DEVOPS,
      },
      {
        titulo: 'Idiomas',
        icone: 'bi bi-globe',
        itens: ['Inglês - Intermediário (B1)'],
      },
    ];
  }
}
