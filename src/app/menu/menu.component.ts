import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  itensMenu: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.itensMenu = [
      { title: 'Início', tooltipTitle: 'Início', route:'https://matheuspcouto.github.io/', icon:'bx bx-home', isActive: true },
      { title: 'Sobre', tooltipTitle: 'Sobre', route:'#sobre', icon:'bx bx-user', isActive: false },
      { title: 'Habilidades', tooltipTitle: 'Habilidades', route:'#habilidades', icon:'bx bx-book-reader', isActive: false },
      { title: 'Certificações', tooltipTitle: 'Certificações', route:'#certifications', icon:'bx bx-certification', isActive: false },
      { title: 'Carreira', tooltipTitle: 'Carreira', route:'#carreira', icon:'bx bx-desktop', isActive: false },
      { title: 'Projetos', tooltipTitle: 'Projetos', route:'#projetos', icon:'bx bx-book-content', isActive: false },
      { title: 'Contato', tooltipTitle: 'Contato', route:'#contato', icon:'bx bx-envelope', isActive: false },
    ];
  }

}
