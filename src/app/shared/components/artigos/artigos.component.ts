import { Component } from '@angular/core';

interface Artigo {
  titulo: string;
  dataPublicacao: string;
  revista: string;
  url: string;
  issn: string;
}

@Component({
  selector: 'artigos',
  standalone: true,
  imports: [],
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
}
