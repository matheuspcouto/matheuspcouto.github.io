import { Component } from '@angular/core';
import { MpcButtonComponent } from 'mpc-lib-angular';

@Component({
  selector: 'sobre',
  imports: [MpcButtonComponent],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {

  /**
   * Idade do usuário.
   * @type {number}
   */
  protected age: number = new Date().getFullYear() - 2000;

  /**
   * Cria uma instância do componente SobreComponent e calcula a idade.
   */
  constructor() {
    const now = new Date();
    const dataNasc = new Date('1998-10-13');
    const mes = now.getMonth() - dataNasc.getMonth();
    this.age = now.getFullYear() - dataNasc.getFullYear();

    if (mes < 0 || (mes === 0 && now.getDate() < dataNasc.getDate())) {
      this.age--;
    }
  }

  /**
   * Abre o currículo em português em uma nova aba.
   */
  protected verCurriculoPT(): void {
    window.open('https://www.canva.com/design/DAGNTsZF9ZA/SlHnN155fRL0kkNLUhE2Xw/view', '_blank');
  }
}
