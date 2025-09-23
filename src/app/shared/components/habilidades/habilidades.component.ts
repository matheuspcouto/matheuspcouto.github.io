import { Component } from '@angular/core';

interface Habilidade {
  titulo: string;
  icone: string;
  itens: string[];
}

@Component({
  selector: 'habilidades',
  standalone: true,
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
        icone: 'bx bx-code-curly',
        itens: BACK_END,
      },
      {
        titulo: 'Front-End',
        icone: 'bx bx-code-alt',
        itens: FRONT_END,
      },
      {
        titulo: 'Banco de Dados',
        icone: 'bx bx-data',
        itens: BANCO_DADOS,
      },
      {
        titulo: 'Testes',
        icone: 'bx bx-wrench',
        itens: TESTES,
      },
      {
        titulo: 'DevOps & Agile',
        icone: 'bx bxl-git',
        itens: DEVOPS,
      },
      {
        titulo: 'Idiomas',
        icone: 'icofont-globe',
        itens: ['Inglês - Intermediário (B1)'],
      },
    ];
  }
}
