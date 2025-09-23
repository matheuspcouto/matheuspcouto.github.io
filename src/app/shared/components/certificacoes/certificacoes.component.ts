import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MpcCardMenuComponent, MpcButtonComponent } from "mpc-lib-angular";

interface Certificacao {
  titulo: string;
  icone: string;
  dataFinalizacao: string;
  url?: string;
}

@Component({
  selector: 'certificacoes',
  standalone: true,
  imports: [MpcCardMenuComponent, MpcButtonComponent, SlicePipe],
  templateUrl: './certificacoes.component.html',
  styleUrls: ['./certificacoes.component.scss']
})
export class CertificacoesComponent {

  /**
   * Lista de certificações.
   * @type {Certificacao[]}
   */
  protected certificacoes: Certificacao[] = [];

  /**
   * Índice atual para exibição de certificados.
   * @type {number}
   */
  protected indiceCertificados: number = 3;

  constructor() {
    this.certificacoes = [
      {
        titulo: 'Programação em Java - Básico ao Avançado | Udemy',
        icone: 'icofont-brand-java',
        dataFinalizacao: 'Outubro - 2022',
        url: 'https://www.udemy.com/certificate/UC-0f71c539-372d-493c-9ac1-4dfafc3cac84/'
      },
      {
        titulo: 'Spring Framework 5 | Udemy',
        icone: 'icofont-brand-java',
        dataFinalizacao: 'Abril - 2023',
        url: 'https://www.udemy.com/certificate/UC-090f45ab-bc0d-4016-bfd0-d11df6ade4d4/'
      },
      {
        titulo: 'JSF for Beginners | Udemy',
        icone: 'icofont-brand-java',
        dataFinalizacao: 'Outubro - 2022',
        url: 'https://udemy.com/certificate/UC-1208c651-7487-484f-a3eb-7f4833d6032c/'
      },
      {
        titulo: 'JPA and Hibernate | Udemy',
        icone: 'icofont-brand-java',
        dataFinalizacao: 'Outubro - 2022',
        url: 'https://udemy.com/certificate/UC-9493b3e3-8172-4b85-8968-c6e7493d93ff/'
      },
      {
        titulo: 'Testes Unitários em Java: JUnit, Mockito e TDD | Udemy',
        icone: 'icofont-brand-java',
        dataFinalizacao: 'Outubro - 2022',
        url: 'https://www.udemy.com/certificate/UC-c1da9160-5c04-4197-87d8-0a5b2b2d1d4c/'
      },
      {
        titulo: 'Unit Testing for Typescript & NodeJs Developers with Jest | Udemy',
        icone: 'icofont-file-javascript',
        dataFinalizacao: 'Outubro - 2022',
        url: 'https://www.udemy.com/certificate/UC-a470165f-fc55-40c0-a3ad-849931e5e865/'
      },
      {
        titulo: 'Academia Angular | Impacta',
        icone: 'icofont-file-javascript',
        dataFinalizacao: 'Novembro - 2021',
      },
      {
        titulo: 'Desenvolvimento Web Completo | Udemy',
        icone: 'icofont-code-alt',
        dataFinalizacao: 'Janeiro - 2023',
        url: 'https://udemy.com/certificate/UC-4601788e-45e3-4e71-accd-605b4e735b1e/'
      },
      {
        titulo: 'Git Completo | Udemy',
        icone: 'icofont-github',
        dataFinalizacao: 'Maio - 2023',
        url: 'https://www.udemy.com/certificate/UC-dbe43478-080f-4f4e-92e7-2cef8edfe943/'
      },
      {
        titulo: 'Atlassian Bamboo | Udemy',
        icone: 'icofont-automation',
        dataFinalizacao: 'Junho - 2023',
        url: 'https://www.udemy.com/certificate/UC-d1ef9257-c9ed-4253-af57-1228cc4dc14f/'
      },
      {
        titulo: 'Microsoft Azure: The Complete Guide | Udemy',
        icone: 'icofont-brand-microsoft',
        dataFinalizacao: 'Julho - 2023',
        url: 'https://udemy.com/certificate/UC-1293e798-05f5-488d-9671-1713dfa4bc98/'
      },
      {
        titulo: 'HPE Fortify - Secure Code Analysis | Udemy',
        icone: 'icofont-ssl-security',
        dataFinalizacao: 'Outubro - 2022',
        url: 'https://www.udemy.com/certificate/UC-540949bf-da50-481a-9ebd-b5bb34020db7/'
      },
      {
        titulo: 'Postman: The Complete Guide | Udemy',
        icone: 'icofont-globe',
        dataFinalizacao: 'Outubro - 2022',
        url: 'https://udemy.com/certificate/UC-7d30b94e-831b-46d4-a967-0d5f465be054/'
      },
      {
        titulo: 'SQL Completo | Softblue',
        icone: 'icofont-database',
        dataFinalizacao: 'Junho - 2019',
      },
      {
        titulo: 'Fundamentos para Desenvolvimento de Software | Microsoft e LinkedIn',
        icone: 'icofont-brand-microsoft',
        dataFinalizacao: 'Julho - 2023',
        url: 'https://www.linkedin.com/learning/certificates/18348bf148e88c4fa136ffbf75a1feb4c8bf6b6d930fd9d651a0acdebb96e852'
      },
      {
        titulo: 'Introduction to Software Engineering - IBM | Coursera',
        icone: 'icofont-brand-ibm',
        dataFinalizacao: 'Outubro - 2022',
        url: 'https://www.coursera.org/account/accomplishments/verify/NCVMRT355WXU'
      },
      {
        titulo: 'Lógica de Programação | Softblue',
        icone: 'icofont-computer',
        dataFinalizacao: 'Novembro - 2020',
      },
      {
        titulo: 'Inglês Intermediário (B1) | Education First',
        icone: 'icofont-google-talk',
        dataFinalizacao: 'Maio - 2022',
        url: 'https://www.efset.org/cert/EqCQ9H'
      },
    ];
  }

  /**
   * Aumenta o índice de certificados para exibir mais.
   */
  protected aumentaIndiceCertificados() {
    this.indiceCertificados += 3;
  }
}
