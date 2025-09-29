import { Component } from '@angular/core';
import { MpcCardComponent, MpcButtonComponent } from 'mpc-lib-angular';

/**
 * Interface que representa um projeto.
 * @interface Projeto
 */
interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  url: string;
  imagem: string;
}

@Component({
  selector: 'projetos',
  imports: [MpcCardComponent, MpcButtonComponent],
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
        descricao: 'Site institucional da Igreja Metodista em Palmas, desenvolvido em Angular,\ncom o objetivo de apresentar a igreja, seus ministérios e eventos.\nO site conta com um painel administrativo para gerenciamento de conteúdo,\ne foi construído com um pipeline de CI/CD através do Github Actions.\nUma solução completa para comunicação digital da instituição religiosa.',
        tecnologias: [
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://igrejametodistapalmas.vercel.app',
        imagem: 'assets/img/projetos/site-imep.png',
      },
      {
        titulo: 'Portfólio - Matheus Pimentel',
        descricao: 'Meu portfólio tem o objetivo de destacar minha trajetória profissional e formação ao longo dos anos.\nApresento com orgulho os projetos em que trabalhei e as tecnologias utilizadas.\nPor meio dele, busco transmitir minha paixão pela área de tecnologia\ne minha dedicação em criar soluções inovadoras e impactantes.',
        tecnologias: [
          'https://img.shields.io/badge/Angular-6A0000?style=for-the-badge&logo=Angular&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://matheuspcouto-dev.vercel.app/',
        imagem: 'assets/img/projetos/portfolio.png',
      },
      {
        titulo: 'Portfólio - Hávyla Ferreira',
        descricao: 'Portfólio online da profissional de Recursos Humanos, Hávyla Ferreira Souza.\nDesenvolvido utilizando tecnologias web modernas como HTML5, CSS3 e Javascript.\nO site apresenta de forma elegante a trajetória profissional da Hávyla,\nsuas experiências acumuladas e principais habilidades desenvolvidas na área.\nUma vitrine digital que destaca sua expertise em gestão de pessoas.',
        tecnologias: [
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
          'https://img.shields.io/badge/Javascript-yellow?style=for-the-badge&logo=Javascript&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://matheuspcouto.dev/portfolio-havyla',
        imagem: 'assets/img/projetos/havyla.png',
      },
      /* {
        titulo: 'Avodah Escalas',
        descricao: 'Projeto de gestão e geração de escalas desenvolvido como TCC em Sistemas de Informação para a Igreja Metodista em Palmas, o qual recebeu uma nota perfeita em sua apresentação. O mesmo oferece facilitar a organização de escalas de forma flexível, permitindo uma melhor gestão das atividades dentro da igreja.',
        tecnologias: [
          'https://img.shields.io/badge/Csharp-009929?style=for-the-badge&logo=Csharp&logoColor=white',
          'https://img.shields.io/badge/.Net-040B14?style=for-the-badge&logo=Windows&logoColor=white',
          'https://img.shields.io/badge/Github-black?style=for-the-badge&logo=Github&logoColor=white',
        ],
        url: 'https://github.com/matheuspcouto/AVODAH',
        imagem: 'assets/img/projetos/Avodah White.png',
      }, */
      {
        titulo: 'IrrIot - Sistema de Irrigação Inteligente',
        descricao:
          'Projeto inovador apresentado na Feira Agrotins de 2019, que consiste em uma\nintegração inteligente entre Arduino e plataforma Java Web para monitoramento.\nPermite controle eficiente de sistema de irrigação com economia de recursos.\nEssa solução tecnológica garante precisão no processo de irrigação automatizada,\noptimizando o uso de água para a produção agrícola sustentável.',
        tecnologias: [
          'https://img.shields.io/badge/Java-F7F7F7?style=for-the-badge&logo=CoffeeScript&logoColor=black',
          'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
          'https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3&logoColor=white',
        ],
        url: 'https://github.com/matheuspcouto/Projeto-Irrigacao',
        imagem: 'assets/img/projetos/irriot.png',
      },
    ];
  }

  /**
   * Redireciona para a URL do projeto em uma nova aba.
   * @param {Projeto} projeto a ser aberto
   */
  protected irParaProjeto(projeto: Projeto): void {
    if (projeto.url) {
      window.open(projeto.url, '_blank');
    }
  }
}
