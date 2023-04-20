import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  carregando = false;

  itensSkils: any[] = [];
  certifications: any[] = [];
  articles: any[] = [];
  jobs: any[] = [];
  projects: any[] = [];
  age: any;

  // TODO: melhorar css e responsividade
  // TODO: Colocar App Planilhas Loja e Form

  constructor() { }

  ngOnInit(): void {
    this.carregando = true;
    this.getSkills();
    this.getCertifications();
    this.getArticles();
    this.getCareer();
    this.getProjects();

    const now = new Date();
    const dataNasc = new Date('2000-05-23');
    const mes = now.getMonth() - dataNasc.getMonth();
    this.age = now.getFullYear() - dataNasc.getFullYear();

    if (mes < 0 || (mes === 0 && now.getDate() < dataNasc.getDate())) {
      this.age--;
    }

    this.carregando = false;
  }

  getProjects() {
    this.projects = [
      {
        title: 'Tribo Store',
        description:
          'Sistema de Loja Virtual da Tribo, desenvolvido para realizar e consultar os pedidos feitos na loja. A aplicação interage com uma planilha Google Sheets, atualizando e listando os itens. Integração realizada por meio de API Back-End criada em Javascript/Google App Script e Angular (Front-End).',
        tecnologies: [
          'https://img.shields.io/badge/Typescript-yellow?style=for-the-badge&logo=Typescript&logoColor=white',
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
          //'https://img.shields.io/badge/Sheets-188038?style=for-the-badge&logo=googleSheets&logoColor=white',
        ],
        url: 'https://matheuspcouto.github.io/Tribo-Store/home',
        image: 'assets/img/projetos/tribo-store.png',
        class: 'project-text w-100 my-auto text-center text-lg-left',
      },
      {
        title: 'Portfólio - Matheus Pimentel',
        description: 'Meu portfólio particular profissional.',
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
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
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
          'Relatórios',
        ],
      },
      {
        title: 'Desenvolvedor Back-End',
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
          'Desenvolvimento e Manutenção de Sistemas Bradesco (Pix, Open Finance e Recarga de Celular)',
          'Supervisão de desenvolvedores júnior',
          'Builds e deploys de aplicações',
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
        title: 'Programação em Java - Básico ao Avançado | Udemy',
        icon: 'icofont-brand-java',
        finishedDate: 'Outubro - 2022',
        url: 'https://www.udemy.com/certificate/UC-0f71c539-372d-493c-9ac1-4dfafc3cac84/'
      },
      {
        title: 'Spring Framework 5 | Udemy',
        icon: 'icofont-brand-java',
        finishedDate: 'Abril - 2023',
        url: 'https://www.udemy.com/certificate/UC-090f45ab-bc0d-4016-bfd0-d11df6ade4d4/'
      },
      {
        title: 'JSF for Beginners | Udemy',
        icon: 'icofont-brand-java',
        finishedDate: 'Outubro - 2022',
        url: 'https://udemy.com/certificate/UC-1208c651-7487-484f-a3eb-7f4833d6032c/'
      },
      {
        title: 'JPA and Hibernate | Udemy',
        icon: 'icofont-brand-java',
        finishedDate: 'Outubro - 2022',
        url: 'https://udemy.com/certificate/UC-9493b3e3-8172-4b85-8968-c6e7493d93ff/'
      },
      {
        title: 'Testes Unitários Java - JUnit, Mockito e TDD | Udemy',
        icon: 'icofont-brand-java',
        finishedDate: 'Outubro - 2022',
        url: 'https://www.udemy.com/certificate/UC-c1da9160-5c04-4197-87d8-0a5b2b2d1d4c/'
      },
      {
        title: 'Desenvolvimento Web Completo | Udemy',
        icon: 'icofont-code-alt',
        finishedDate: 'Janeiro - 2023',
        url: 'https://udemy.com/certificate/UC-4601788e-45e3-4e71-accd-605b4e735b1e/'
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
        url: 'https://www.udemy.com/certificate/UC-a470165f-fc55-40c0-a3ad-849931e5e865/'
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
        title: 'Postman - The Complete Guide | Udemy',
        icon: 'icofont-ui-message',
        finishedDate: 'Outubro - 2022',
        url: 'https://udemy.com/certificate/UC-7d30b94e-831b-46d4-a967-0d5f465be054/'
      },
      {
        title: 'Introduction to Software Engineering | Coursera (IBM)',
        icon: 'icofont-brand-ibm',
        finishedDate: 'Outubro - 2022',
        url: 'https://www.coursera.org/account/accomplishments/verify/NCVMRT355WXU'
      },
      {
        title: 'Inglês Intermediário (B1) | Education First',
        icon: 'icofont-google-talk',
        finishedDate: 'Maio - 2022',
        url: 'https://www.efset.org/cert/EqCQ9H'
      },
    ];
  }

  getSkills() {
    let itensBackEnd = [
      '> Java',
      '- SpringBoot',
      '- JSF | JPA | JSP',
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
        itens: ['Inglês - Intermediário (B1)'],
      },
    ];
  }
}
