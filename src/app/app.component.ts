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
  indiceCertificados = 3;

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
        description: 'Sistema E-Commerce da Tribo que foi projetado para consultar e realizar pedidos na loja. Utilizando uma estrutura REST API, o Back-End foi implementado em Node.js e o Front-End em Angular. Com um pipeline de CI/CD construído através do Github Actions.',
        tecnologies: [
          'https://img.shields.io/badge/Node.JS-009929?style=for-the-badge&logo=Javascript&logoColor=white',
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://tribo-store.vercel.app/home',
        image: 'assets/img/projetos/tribo-store.png',
        class: 'project-text w-100 my-auto text-center text-lg-left',
      },
      {
        title: 'Portfólio - Matheus Pimentel',
        description: 'Meu portfólio online é uma plataforma que reflete minha trajetória profissional. Nele, destaco minha carreira e formação, exibo meus certificados e habilidades, e apresento com orgulho os projetos em que trabalhei. Por meio desse portfólio, busco transmitir minha paixão pela área de tecnologia e minha dedicação em criar soluções inovadoras e impactantes.',
        tecnologies: [
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://matheuspcouto.github.io',
        image: 'assets/img/projetos/portfolio.png',
        class: 'project-text w-100 my-auto text-center text-lg-right',
      },
      {
        title: 'Portfólio - Hávyla Ferreira',
        description: 'Portfólio online da profissional de Recursos Humanos, Hávyla Ferreira Souza. Desenvolvido em HTML, CSS e Javascript, o site apresenta a trajetória profissional da Hávyla, suas experiências e habilidades.',
        tecnologies: [
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
          'https://img.shields.io/badge/Javascript-yellow?style=for-the-badge&logo=Javascript&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://matheuspcouto.github.io/portfolio-havyla',
        image: 'assets/img/projetos/havyla.png',
        class: 'project-text w-100 my-auto text-center text-lg-right',
      },
      {
        title: 'Avodah Escalas',
        description: 'Projeto de gestão e geração de escalas desenvolvido como TCC em Sistemas de Informação para a Igreja Metodista em Palmas, o qual recebeu uma nota perfeita em sua apresentação. O mesmo oferece facilitar a organização de escalas de forma flexível, permitindo uma melhor gestão das atividades dentro da igreja.',
        tecnologies: [
          'https://img.shields.io/badge/Csharp-009929?style=for-the-badge&logo=Csharp&logoColor=white',
          'https://img.shields.io/badge/.Net-040B14?style=for-the-badge&logo=Windows&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://github.com/matheuspcouto/AVODAH',
        image: 'assets/img/projetos/Avodah White.png',
        class: 'project-text w-100 my-auto text-center text-lg-right',
      },
      {
        title: 'IrrIot - Sistema de Irrigação Inteligente',
        description:
          'O projeto apresentado na Feira Agrotins de 2019 consiste em uma integração entre Arduino e plataforma Java Web para monitoramento e controle eficiente de sistema de irrigação. Essa solução inovadora permite economia de recursos e precisão no processo de irrigação, garantindo o uso otimizado de água para a produção agrícola.',
        tecnologies: [
          'https://img.shields.io/badge/Java-F7F7F7?style=for-the-badge&logo=CoffeeScript&logoColor=black',
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
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
          'CI/CD',
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
        title: 'Testes Unitários em Java: JUnit, Mockito e TDD | Udemy',
        icon: 'icofont-brand-java',
        finishedDate: 'Outubro - 2022',
        url: 'https://www.udemy.com/certificate/UC-c1da9160-5c04-4197-87d8-0a5b2b2d1d4c/'
      },
      {
        title: 'Unit Testing for Typescript & NodeJs Developers with Jest | Udemy',
        icon: 'icofont-file-javascript',
        finishedDate: 'Outubro - 2022',
        url: 'https://www.udemy.com/certificate/UC-a470165f-fc55-40c0-a3ad-849931e5e865/'
      },
      {
        title: 'Academia Angular | Impacta',
        icon: 'icofont-file-javascript',
        finishedDate: 'Novembro - 2021',
      },
      {
        title: 'Desenvolvimento Web Completo | Udemy',
        icon: 'icofont-code-alt',
        finishedDate: 'Janeiro - 2023',
        url: 'https://udemy.com/certificate/UC-4601788e-45e3-4e71-accd-605b4e735b1e/'
      },
      {
        title: 'Git Completo | Udemy',
        icon: 'icofont-github',
        finishedDate: 'Maio - 2023',
        url: 'https://www.udemy.com/certificate/UC-dbe43478-080f-4f4e-92e7-2cef8edfe943/'
      },
      {
        title: 'Atlassian Bamboo | Udemy',
        icon: 'icofont-automation',
        finishedDate: 'Junho - 2023',
        url: 'https://www.udemy.com/certificate/UC-d1ef9257-c9ed-4253-af57-1228cc4dc14f/'
      },
      {
        title: 'Microsoft Azure: The Complete Guide | Udemy',
        icon: 'icofont-brand-microsoft',
        finishedDate: 'Julho - 2023',
        url: 'https://udemy.com/certificate/UC-1293e798-05f5-488d-9671-1713dfa4bc98/'
      },
      {
        title: 'HPE Fortify - Secure Code Analysis | Udemy',
        icon: 'icofont-ssl-security',
        finishedDate: 'Outubro - 2022',
        url: 'https://www.udemy.com/certificate/UC-540949bf-da50-481a-9ebd-b5bb34020db7/'
      },
      {
        title: 'Postman: The Complete Guide | Udemy',
        icon: 'icofont-globe',
        finishedDate: 'Outubro - 2022',
        url: 'https://udemy.com/certificate/UC-7d30b94e-831b-46d4-a967-0d5f465be054/'
      },
      {
        title: 'SQL Completo | Softblue',
        icon: 'icofont-database',
        finishedDate: 'Junho - 2019',
      },
      {
        title: 'Fundamentos para Desenvolvimento de Software | Microsoft e LinkedIn',
        icon: 'icofont-brand-microsoft',
        finishedDate: 'Julho - 2023',
        url: 'https://www.linkedin.com/learning/certificates/18348bf148e88c4fa136ffbf75a1feb4c8bf6b6d930fd9d651a0acdebb96e852'
      },
      {
        title: 'Introduction to Software Engineering - IBM | Coursera',
        icon: 'icofont-brand-ibm',
        finishedDate: 'Outubro - 2022',
        url: 'https://www.coursera.org/account/accomplishments/verify/NCVMRT355WXU'
      },
      {
        title: 'Lógica de Programação | Softblue',
        icon: 'icofont-computer',
        finishedDate: 'Novembro - 2020',
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
      '> NodeJS',
      '- ExpressJS | TypeScript',
    ];

    let itensFrontEnd = [
      '> HTML & CSS',
      '> Bootstrap',
      '> JavaScript',
      '- Angular',
    ];

    let itensDatabase = [
      '> PostgreSQL',
      '> SQL Server',
      '> MySQL',
      '> MongoDB',
    ];

    let itensDevOps = ['> Git', '- Github | Bitbucket', '> Atlassian Bamboo', '> Github Actions'];

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

  aumentaIndiceCertificados() {
    this.indiceCertificados += 3;
  }
}
