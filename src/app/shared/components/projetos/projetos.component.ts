import { Component } from '@angular/core';
import { CardLinks, MpcCardComponent } from 'mpc-lib-angular';

interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  url: string;
  imagem: string;
}

@Component({
  selector: 'projetos',
  standalone: true,
  imports: [MpcCardComponent],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent {

  /**
   * Lista de projetos.
   * @type {Projeto[]}
   */
  protected projetos: Projeto[] = [];

  constructor() {
    this.projetos = [
      {
        titulo: 'Site IMEP',
        descricao: 'Site institucional da Igreja Metodista em Palmas, desenvolvido em Angular, com o objetivo de apresentar a igreja, seus ministérios e eventos. O site conta com um painel administrativo para gerenciamento de conteúdo, e foi construído com um pipeline de CI/CD através do Github Actions.',
        tecnologias: [
          'https://img.shields.io/badge/Node.JS-009929?style=for-the-badge&logo=Javascript&logoColor=white',
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://igrejametodistapalmas.vercel.app',
        imagem: 'assets/img/projetos/site-imep.png',
      },
      {
        titulo: 'Portfólio - Matheus Pimentel',
        descricao: 'Meu portfólio tem o objetivo de destacar minha trajetória profissional e formação, onde exibo meus certificados e habilidades, e apresento com orgulho os projetos em que trabalhei. Por meio desse dele, busco transmitir minha paixão pela área de tecnologia e minha dedicação em criar soluções inovadoras e impactantes.',
        tecnologias: [
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://matheuspcouto.github.io',
        imagem: 'assets/img/projetos/portfolio.png',
      },
      {
        titulo: 'Portfólio - Hávyla Ferreira',
        descricao: 'Portfólio online da profissional de Recursos Humanos, Hávyla Ferreira Souza. Desenvolvido em HTML, CSS e Javascript, o site apresenta a trajetória profissional da Hávyla, suas experiências e habilidades.',
        tecnologias: [
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
          'https://img.shields.io/badge/Javascript-yellow?style=for-the-badge&logo=Javascript&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://matheuspcouto.github.io/portfolio-havyla',
        imagem: 'assets/img/projetos/havyla.png',
      },
      {
        titulo: 'Avodah Escalas',
        descricao: 'Projeto de gestão e geração de escalas desenvolvido como TCC em Sistemas de Informação para a Igreja Metodista em Palmas, o qual recebeu uma nota perfeita em sua apresentação. O mesmo oferece facilitar a organização de escalas de forma flexível, permitindo uma melhor gestão das atividades dentro da igreja.',
        tecnologias: [
          'https://img.shields.io/badge/Csharp-009929?style=for-the-badge&logo=Csharp&logoColor=white',
          'https://img.shields.io/badge/.Net-040B14?style=for-the-badge&logo=Windows&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://github.com/matheuspcouto/AVODAH',
        imagem: 'assets/img/projetos/Avodah White.png',
      },
      {
        titulo: 'IrrIot - Sistema de Irrigação Inteligente',
        descricao:
          'O projeto apresentado na Feira Agrotins de 2019 consiste em uma integração entre Arduino e plataforma Java Web para monitoramento e controle eficiente de sistema de irrigação. Essa solução inovadora permite economia de recursos e precisão no processo de irrigação, garantindo o uso otimizado de água para a produção agrícola.',
        tecnologias: [
          'https://img.shields.io/badge/Java-F7F7F7?style=for-the-badge&logo=CoffeeScript&logoColor=black',
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
        ],
        url: 'https://github.com/matheuspcouto/Projeto-Irrigacao',
        imagem: 'assets/img/projetos/irriot.jfif',
      },
    ];
  }

  /**
   * Retorna o link do projeto, se houver URL cadastrada.
   * @param {Projeto} projeto a ser avaliado
   * @returns {CardLinks[]} Lista de links de contato
   */
  protected getLinkProjeto(projeto: Projeto): CardLinks[] {
    if (projeto.url) {
      const URL: CardLinks = { url: projeto.url, icone: "bi bi-link" }
      return [URL];
    }
    return [];
  }
}
