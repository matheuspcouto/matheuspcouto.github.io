import { Component } from '@angular/core';

@Component({
  selector: 'sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {

  /**
   * Idade do usuário.
   * @type {number}
   */
  protected age: number = new Date().getFullYear() - 2000;

  constructor() {
    const now = new Date();
    const dataNasc = new Date('2000-05-23');
    const mes = now.getMonth() - dataNasc.getMonth();
    this.age = now.getFullYear() - dataNasc.getFullYear();

    if (mes < 0 || (mes === 0 && now.getDate() < dataNasc.getDate())) {
      this.age--;
    }
  }
}
