import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Portfolio - Matheus Pimentel Do Couto';

  itensSkils: any[] = [];
  certifications: any[] = [];
  articles: any[] = [];
  jobs: any[] = [];
  projects: any[] = [];
  age: any;

  constructor() {}

  ngOnInit(): void {
    this.getSkills();
    this.getCertifications();
    this.getArticles();
    this.getCareer();
    this.getProjects();

    let dataAniversario = new Date('2000-05-23');
    let now = new Date();

    this.age = now.getFullYear() - dataAniversario.getFullYear();
  }

  getProjects(){
    this.projects = [
      {
        title: 'Lista de Presentes - Casamento Thiago & Juliana',
        description: 'Projeto desenvolvido em Angular para administrar a lista de presentes do casal, a aplicação interage com uma planilha do google, atualizando e listando os itens. Interação realizada por meio de API disponibilizada pelo sheets.db.io.',
        tecnologies: ['bx bx-javascript','bx bx-angular', 'bx bxl-css3', 'bx bxl-html5'],
        url: 'https://matheuspcouto.github.io/Lista-Presentes-T-J/',
        image: 'assets/img/portfolio/form-cha.png',
        class: 'project-text w-100 my-auto text-center text-lg-right'
      },
      {
        title: 'Avodah Escalas',
        description: 'Sistema de gestão e geração de escalas dinâmicas. Projeto realizado como Trabalho de Conclusão de Curso de Sistemas de Informação direcionado à Igreja Metodista em Palmas.',
        tecnologies: ['bx bxl-microsoft'],
        url: 'https://github.com/matheuspcouto/AVODAH',
        image: 'assets/img/portfolio/Avodah White.png',
        class: 'project-text w-100 my-auto text-center text-lg-right'
      },
      {
        title: 'IrrIot - Sistema de Irrigação Inteligente',
        description: 'Projeto de interação com Arduino e plataforma Java Web para monitorar dados e controlar o sistema de irrigação de forma econômica e precisa.',
        tecnologies: ['bx bx-java', 'bx bxl-css3', 'bx bxl-html5'],
        url: 'https://github.com/matheuspcouto/Projeto-Irrigacao',
        image: 'assets/img/portfolio/irriot.jfif',
        class: 'project-text w-100 my-auto text-center text-lg-right'
      },
    ]
  }

  getCareer(){

    this.jobs = [
      {
        title: 'Estágio',
        period: '2019 - 2021',
        company: 'Secretaria de Desenvolvimento Econômico e Emprego - SEDEM',
        activities: ['Suporte de Hardware e Software', 'Relatórios', 'Administração de Alvarás para Empresas']
      },
      {
        title: 'Desenvolvedor Java Júnior',
        period: 'Março, 2021 - Outubro, 2021',
        company: 'Eco Açú Tecnologia',
        activities: ['Desenvolvimento e Manutenção de Sistemas de Administração Pública', 'Gestão e Importação de Banco de Dados', 'Relatórios em Jasper']
      },
      {
        title: 'Consultor de Soluções Digitais & Desenvolvedor Fullstack Pleno',
        period: 'Novembro, 2021 - Atualmente',
        company: 'Capgemini Brasil S/A',
        activities: ['Desenvolvimento e Manutenção de Sistemas Bradesco']
      },
    ]
  }

  getArticles(){
    this.articles = [
      {
        title: 'Ergonomic Assessment of Avodah Scale Management System Interface Quality: a Project-Based Learning Case Study',
        publishedDate: 'Dezembro - 2021',
        journal: 'International Journal of Development Research - IJDR',
        url: 'https://www.journalijdr.com/sites/default/files/issue-pdf/23530_0.pdf',
        issn: 'ISSN: 2230-9926'
      },
    ]
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
        title: 'Inglês Intermediário| Education First',
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
      '- .NET Core & Framework',
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

    let itensDevOps = [
      '> Git',
      '> Jenkins | Bamboo',
      '> Docker',
    ];

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