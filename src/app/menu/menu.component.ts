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
      { title: 'Início', tooltipTitle: 'Início', route:'index.html', icon:'bx bx-home', isActive: true },
      { title: 'Sobre', tooltipTitle: 'Sobre', route:'#about', icon:'bx bx-user', isActive: false },
      { title: 'Habilidades', tooltipTitle: 'Habilidades', route:'#facts', icon:'bx bx-book-reader', isActive: false },
      { title: 'Carreira', tooltipTitle: 'Carreira', route:'#resume', icon:'bx bx-desktop', isActive: false },
      { title: 'Projetos', tooltipTitle: 'Projetos', route:'#portfolio', icon:'bx bx-book-content', isActive: false },
      { title: 'Contato', tooltipTitle: 'Contato', route:'#contact', icon:'bx bx-envelope', isActive: false },
    ];
  }

}
