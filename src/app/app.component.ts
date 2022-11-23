import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Portfolio - Matheus Pimentel Do Couto';
  carregando = false;

  itensSkils: any[] = [];
  certifications: any[] = [];
  articles: any[] = [];
  jobs: any[] = [];
  projects: any[] = [];
  age: any;

  constructor() {}

  ngOnInit(): void {
    this.carregando = true;
    this.getSkills();
    this.getCertifications();
    this.getArticles();
    this.getCareer();
    this.getProjects();

    let dataAniversario = new Date('2000-05-23');
    let now = new Date();

    this.age = now.getFullYear() - dataAniversario.getFullYear();
    this.carregando = false;
  }

  getProjects() {
    this.projects = [
      {
        title: 'Tribolão da Copa do Mundo',
        description:
          'Projeto desenvolvido em Angular para realizar um bolão dos vencedores da copa do mundo 2022 para a Tribo, a aplicação interage com uma planilha do google, atualizando e listando os itens. Interação realizada por meio de API disponibilizada pelo sheets.db.io.',
        tecnologies: [
          'https://img.shields.io/badge/Typescript-yellow?style=for-the-badge&logo=Typescript&logoColor=white',
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        ],
        url: 'https://matheuspcouto.github.io/Tribolao-Copa-2022/',
        image: 'assets/img/portfolio/tribolao.png',
        class: 'project-text w-100 my-auto text-center text-lg-right',
      },
      {
        title: 'Avodah Escalas',
        description:
          'Sistema de gestão e geração de escalas dinâmicas. Projeto realizado como TCC de Sistemas de Informação direcionado à Igreja Metodista em Palmas.',
          tecnologies: [
            'https://img.shields.io/badge/Csharp-009929?style=for-the-badge&logo=Csharp&logoColor=white',
            'https://img.shields.io/badge/.Net-040B14?style=for-the-badge&logo=Windows&logoColor=white',
          ],
        url: 'https://github.com/matheuspcouto/AVODAH',
        image: 'assets/img/portfolio/Avodah White.png',
        class: 'project-text w-100 my-auto text-center text-lg-right',
      },
      {
        title: 'Info Store',
        description:
          'Sistema de Controle de Estoque de uma loja de informática. Projeto realizado na disciplina de Tópicos em Programação 3 durante o 5º período.',
          tecnologies: [
            'https://img.shields.io/badge/Csharp-009929?style=for-the-badge&logo=Csharp&logoColor=white',
            'https://img.shields.io/badge/.Net-040B14?style=for-the-badge&logo=Windows&logoColor=white',
          ],
        url: 'https://github.com/matheuspcouto/INFO-STORE',
        image: 'assets/img/portfolio/info.png',
        class: 'project-text w-100 my-auto text-center text-lg-left',
      },
      {
        title: 'IrrIot - Sistema de Irrigação Inteligente',
        description:
          'Projeto de interação com Arduino e plataforma Java Web para monitorar dados e controlar o sistema de irrigação de forma econômica e precisa.',
          tecnologies: [
            'https://img.shields.io/badge/Java-F7F7F7?style=for-the-badge&logo=CoffeeScript&logoColor=black',
            'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
            'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
          ],
        url: 'https://github.com/matheuspcouto/Projeto-Irrigacao',
        image: 'assets/img/portfolio/irriot.jfif',
        class: 'project-text w-100 my-auto text-center text-lg-right',
      },
    ];
  }

  getCareer() {
    this.jobs = [
      {
        title: 'Estágio',
        period: '2019 - 2021',
        company: 'Secretaria de Desenvolvimento Econômico e Emprego - SEDEM',
        activities: [
          'Suporte de Hardware e Software',
          'Relatórios',
          'Administração de Alvarás para Empresas',
        ],
      },
      {
        title: 'Desenvolvedor Java Júnior',
        period: 'Março, 2021 - Outubro, 2021',
        company: 'Eco Açú Tecnologia',
        activities: [
          'Desenvolvimento e Manutenção de Sistemas de Administração Pública',
          'Gestão e Importação de Banco de Dados',
          'Relatórios em Jasper',
        ],
      },
      {
        title: 'Consultor de Soluções Digitais & Desenvolvedor Fullstack Pleno',
        period: 'Novembro, 2021 - Atualmente',
        company: 'Capgemini Brasil S/A',
        activities: ['Desenvolvimento e Manutenção de Sistemas Bradesco'],
      },
    ];
  }

  getArticles() {
    this.articles = [
      {
        title:
          'Ergonomic Assessment of Avodah Scale Management System Interface Quality: a Project-Based Learning Case Study',
        publishedDate: 'Dezembro - 2021',
        journal: 'International Journal of Development Research - IJDR',
        url: 'https://www.journalijdr.com/sites/default/files/issue-pdf/23530_0.pdf',
        issn: 'ISSN: 2230-9926',
      },
    ];
  }

  getCertifications() {
    this.certifications = [
      {
        title: 'SQL Completo | Softblue',
        icon: 'icofont-database',
        finishedDate: 'Junho - 2019',
      },
      {
        title: 'Lógica de Programação | Softblue',
        icon: 'icofont-computer',
        finishedDate: 'Novembro - 2020',
      },
      {
        title: 'Academia Angular | Impacta',
        icon: 'icofont-file-javascript',
        finishedDate: 'Novembro - 2021',
      },
      {
        title: 'Inglês Intermediário | Education First',
        icon: 'icofont-google-talk',
        finishedDate: 'Maio - 2022',
      },
    ];
  }

  getSkills() {
    let itensBackEnd = [
      '> Java',
      '- SpringBoot',
      '- JSF | JPA | JSP',
      '> C#',
      '- .Net',
    ];

    let itensFrontEnd = [
      '> HTML & CSS',
      '> Bootstrap',
      '> TypeScript',
      '> JavaScript',
      '- Angular',
    ];

    let itensDatabase = [
      '> PostgreSQL',
      '> SQL Server',
      '> MySQL',
      '> MongoDB',
      '> DynamoDB',
    ];

    let itensDevOps = ['> Git', '> Jenkins | Bamboo', '> Docker'];

    let itensTest = ['> JUnit', '> Jest', '> Mockito', '> Postman'];

    this.itensSkils = [
      {
        title: 'Back-End',
        icon: 'bx bx-code-curly',
        itens: itensBackEnd,
      },
      {
        title: 'Front-End',
        icon: 'bx bx-code-alt',
        itens: itensFrontEnd,
      },
      {
        title: 'Banco de Dados',
        icon: 'bx bx-data',
        itens: itensDatabase,
      },
      {
        title: 'DevOps',
        icon: 'bx bxl-git',
        itens: itensDevOps,
      },
      {
        title: 'Testes',
        icon: 'bx bx-wrench',
        itens: itensTest,
      },
      {
        title: 'Idiomas',
        icon: 'icofont-globe',
        itens: ['Inglês - Intermediário'],
      },
    ];
  }
}
