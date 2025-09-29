import { Component } from '@angular/core';
import { MpcCardMenuComponent } from 'mpc-lib-angular';

/**
 * Interface padrão para os artigos.
 * @interface Artigo
 */
interface Artigo {
  titulo: string;
  dataPublicacao: string;
  revista: string;
  url: string;
  issn: string;
}

@Component({
  selector: 'artigos',
  imports: [MpcCardMenuComponent],
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.scss']
})
export class ArtigosComponent {

  /**
   * Lista de artigos publicados.
   * @type {Artigo[]}
   */
  protected artigos: Artigo[] = [];

  constructor() {
    this.artigos = [
      {
        titulo: 'Ergonomic Assessment of Avodah Scale Management System Interface Quality: a Project-Based Learning Case Study',
        dataPublicacao: 'Dezembro - 2021',
        revista: 'International Journal of Development Research - IJDR',
        url: 'https://www.journalijdr.com/sites/default/files/issue-pdf/23530_0.pdf',
        issn: 'ISSN: 2230-9926',
      },
    ];
  }

  /**
   * Abre o link do artigo em uma nova aba.
   * @param url URL do artigo.
   */
  protected irParaArtigo(url: string): void {
    window.open(url, '_blank');
  }
}
