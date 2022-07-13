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

  constructor() {}

  ngOnInit(): void {
    this.getSkills();
    this.getCertifications();
    this.getArticles();
    this.getCareer();
    this.getProjects();
  }

  getProjects(){
    this.projects = [
      {
        title: 'Avodah Scales',
        description: 'Management system and generation of dynamic scales. Project carried out as Completion Work of Information Systems Course directed to the Methodist Church in Palmas.',
        tecnology: '- Developed in C#.',
        url: 'https://github.com/matheuspcouto/AVODAH',
        image: 'assets/img/portfolio/Avodah White.png',
        position: 'right'
      },
      {
        title: 'Info Store',
        description: 'Inventory Control System of a computer store. Project carried out in the subject of Topics in Programming 3 during the 5th period.',
        tecnology: '- Developed in C#.',
        url: 'https://github.com/matheuspcouto/INFO-STORE',
        image: 'assets/img/portfolio/info.png',
        position: 'left'
      },
      {
        title: 'IrrIot - Intelligent Irrigation System',
        description: 'Interaction project with Arduino and Java Web platform to monitor data and control the irrigation system in a cost-effective and accurate way.',
        tecnology: '- Developed in Java.',
        url: 'https://github.com/matheuspcouto/Projeto-Irrigacao',
        image: 'assets/img/portfolio/irriot.jfif',
        position: 'right'
      },
    ]
  }

  getCareer(){

    this.jobs = [
      {
        title: 'Intership',
        period: '2019 - 2021',
        company: 'Secretaria de Desenvolvimento Econômico e Emprego - SEDEM',
        activities: ['Hardware and Software Support', 'Reports', 'Administration of Permits for Companies']
      },
      {
        title: 'Java Developer',
        period: 'March, 2021 - October, 2021',
        company: 'Eco Açú Tecnologia',
        activities: ['Development and Maintenance of Public Administration Systems', 'Database Administration and Import', 'Reports on Jasper Reports']
      },
      {
        title: 'Digital Solutions Consultant & Fullstack Developer',
        period: 'November, 2021 - Currently',
        company: 'Capgemini Brazil S/A',
        activities: ['Development and Maintenance of Banking Service System.']
      },
    ]
  }

  getArticles(){
    this.articles = [
      {
        title: 'Ergonomic Assessment of Avodah Scale Management System Interface Quality: a Project-Based Learning Case Study',
        publishedDate: 'December - 2021',
        journal: 'International Journal of Development Research - IJDR',
        url: 'https://www.journalijdr.com/sites/default/files/issue-pdf/23530_0.pdf',
        issn: 'ISSN: 2230-9926'
      },
    ]
  }

  getCertifications() {
    this.certifications = [
      {
        title: 'SQL Complete | Softblue',
        icon: 'icofont-database',
        finishedDate: 'June - 2019',
      },
      {
        title: 'Programming Logic | Softblue',
        icon: 'icofont-computer',
        finishedDate: 'November - 2020',
      },
      {
        title: 'Angular Academy | Impacta',
        icon: 'icofont-file-javascript',
        finishedDate: 'November - 2021',
      },
      {
        title: 'Intermediate English | Education First',
        icon: 'icofont-google-talk',
        finishedDate: 'May - 2022',
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
      '> HTML',
      '> CSS',
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
      '> Git | StarTeam',
      '> Jenkins | Bamboo',
      '> Docker',
      '> AWS (API Gateway | Lambda Functions)',
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
        title: 'Databases',
        icon: 'bx bx-data',
        itens: itensDatabase,
      },
      {
        title: 'DevOps',
        icon: 'bx bxl-git',
        itens: itensDevOps,
      },
      {
        title: 'Tests',
        icon: 'bx bx-wrench',
        itens: itensTest,
      },
      {
        title: 'Languages',
        icon: 'icofont-globe',
        itens: ['English - Intermediate'],
      },
    ];
  }
}
