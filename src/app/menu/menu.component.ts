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
      { title: 'Begin', tooltipTitle: 'Begin', route:'index.html', icon:'bx bx-home', isActive: true },
      { title: 'About', tooltipTitle: 'About', route:'#about', icon:'bx bx-user', isActive: false },
      { title: 'Skills', tooltipTitle: 'Skills', route:'#facts', icon:'bx bx-book-reader', isActive: false },
      { title: 'Career', tooltipTitle: 'Career', route:'#resume', icon:'bx bx-desktop', isActive: false },
      { title: 'Projects', tooltipTitle: 'Projects', route:'#portfolio', icon:'bx bx-book-content', isActive: false },
      { title: 'Contact', tooltipTitle: 'Contact', route:'#contact', icon:'bx bx-envelope', isActive: false },
    ];
  }

}
