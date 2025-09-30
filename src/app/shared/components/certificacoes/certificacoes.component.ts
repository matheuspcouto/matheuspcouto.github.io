import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MpcCardMenuComponent, MpcButtonComponent } from "mpc-lib-angular";

/**
 * Interface que representa uma certificação.
 * @interface Certificacao
 */
interface Certificacao {
  titulo: string;
  icone: string;
  dataFinalizacao: string;
  url?: string;
}

@Component({
  selector: 'certificacoes',
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
        titulo: 'RH Talks | Liderança & Cultura',
        icone: 'bi bi-people-fill',
        dataFinalizacao: 'Outubro - 2023',
      },
      {
        titulo: 'RH Summit 2023',
        icone: 'bi bi-people-fill',
        dataFinalizacao: 'Junho - 2023',
      },
      {
        titulo: 'RH Talks | Dados e IA',
        icone: 'bi bi-people-fill',
        dataFinalizacao: 'Março - 2023',
      },
      {
        titulo: 'RH Talks | Edição Especial: Gestão Global de Pessoas',
        icone: 'bi bi-people-fill',
        dataFinalizacao: 'Outubro - 2022',
      },
    ];
  }

  /**
   * Aumenta o índice de certificados para exibir mais.
   */
  protected aumentaIndiceCertificados(): void {
    this.indiceCertificados += 3;
  }

  /**
   * Abre o link do certificado em uma nova aba.
   * @param url URL do certificado.
   */
  protected irParaCertificado(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
