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
        title: 'Acampamento Tribo-Soma',
        description:
          'Projeto desenvolvido em Angular para realizar as inscrições do acampamento realizado pelos jovens da Igreja Metodista em Palmas, a aplicação interage com uma planilha Google Sheets, atualizando e listando os itens. Interação realizada por meio de API disponibilizada pelo sheets.db.io.',
        tecnologies: [
          'https://img.shields.io/badge/Typescript-yellow?style=for-the-badge&logo=Typescript&logoColor=white',
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        ],
        url: 'https://matheuspcouto.github.io/Acampamento-Tribo-Soma/',
        image: 'assets/img/projetos/acampamento.jpg',
        class: 'project-text w-100 my-auto text-center text-lg-left',
      },
      {
        title: 'Tribolão da Copa do Mundo',
        description:
          'Projeto desenvolvido em Angular para realizar um bolão da copa do mundo 2022 da Tribo (área masculina de jovens da Igreja Metodista em Palmas), a aplicação interage com uma planilha Google Sheets, atualizando e listando os itens. Interação realizada por meio de API disponibilizada pelo sheets.db.io.',
        tecnologies: [
          'https://img.shields.io/badge/Typescript-yellow?style=for-the-badge&logo=Typescript&logoColor=white',
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        ],
        url: 'https://matheuspcouto.github.io/Tribolao-Copa-2022/',
        image: 'assets/img/projetos/tribolao.png',
        class: 'project-text w-100 my-auto text-center text-lg-right',
      },
      {
        title: 'Intercélulas - Inscrições',
        description:
          'Projeto desenvolvido em Angular para realizar as inscrições do evento poliesportivo Intercélulas da Tribo (área masculina de jovens da Igreja Metodista em Palmas), a aplicação interage com uma planilha Google Sheets, atualizando e listando os itens. Interação realizada por meio de API disponibilizada pelo sheets.db.io.',
        tecnologies: [
          'https://img.shields.io/badge/Typescript-yellow?style=for-the-badge&logo=Typescript&logoColor=white',
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        ],
        url: 'https://matheuspcouto.github.io/Inscricao-Tribo-Intercelulas/',
        image: 'assets/img/projetos/Triboy.png',
        class: 'project-text w-100 my-auto text-center text-lg-right',
      },
      {
        title: 'Portfólio - Matheus Pimentel',
        description:
          'Meu portfólio particular profissional.',
        tecnologies: [
          'https://img.shields.io/badge/Typescript-yellow?style=for-the-badge&logo=Typescript&logoColor=white',
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        ],
        url: 'https://matheuspcouto.github.io',
        image: 'assets/img/projetos/portfolio.png',
        class: 'project-text w-100 my-auto text-center text-lg-right',
      },
      {
        title: 'Portfólio - Hávyla Ferreira',
        description:
          'Portfólio particular da profissional de Recursos Humanos, Hávyla Ferreira Souza.',
        tecnologies: [
          'https://img.shields.io/badge/Javascript-yellow?style=for-the-badge&logo=Javascript&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        ],
        url: 'https://matheuspcouto.github.io/portfolio-havyla',
        image: 'assets/img/projetos/havyla.png',
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
        image: 'assets/img/projetos/Avodah White.png',
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
        image: 'assets/img/projetos/info.png',
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
        image: 'assets/img/projetos/irriot.jfif',
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
          'Administração de Alvarás para Empresas',
          'Relatórios'
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
        title: 'Desenvolvedor Fullstack',
        period: 'Novembro, 2021 - Atualmente',
        company: 'Capgemini Brasil S/A',
        activities: [
          'Desenvolvimento e Manutenção de Sistemas Bradesco',
          'Supervisão de desenvolvedores júnior',
          'Builds e deploys de aplicações'
        ],
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
        title: 'Programação em Java do básico ao avançado | Udemy',
        icon: 'icofont-brand-java',
        finishedDate: 'Outubro - 2022',
      },
      {
        title: 'JSF for Beginners | Udemy',
        icon: 'icofont-brand-java',
        finishedDate: 'Outubro - 2022',
      },
      {
        title: 'JPA and Hibernate | Udemy',
        icon: 'icofont-brand-java',
        finishedDate: 'Outubro - 2022',
      },
      {
        title: 'Testes Unitários Java - JUnit, Mockito e TDD | Udemy',
        icon: 'icofont-brand-java',
        finishedDate: 'Outubro - 2022',
      },
      {
        title: 'Academia Angular | Impacta',
        icon: 'icofont-file-javascript',
        finishedDate: 'Novembro - 2021',
      },
      {
        title: 'Testes Unitários com Jest | Udemy',
        icon: 'icofont-verification-check',
        finishedDate: 'Outubro - 2022',
      },
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
        title: 'HPE Fortify | Udemy',
        icon: 'icofont-verification-check',
        finishedDate: 'Outubro - 2022',
      },
      {
        title: 'Postman - The Complete Guide | Udemy',
        icon: 'icofont-ui-message',
        finishedDate: 'Outubro - 2022',
      },
      {
        title: 'Introduction to Software Engineering | Coursera (IBM)',
        icon: 'icofont-brand-ibm',
        finishedDate: 'Outubro - 2022',
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
