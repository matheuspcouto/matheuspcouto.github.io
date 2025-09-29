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
    const dataNasc = new Date('2000-05-23');
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
    window.open('https://www.canva.com/design/DAF-pR8ynQw/2daYc25BT31YuFiDKvtJjw/view', '_blank');
  }

  /**
   * Abre o currículo em inglês em uma nova aba.
   */
  protected verCurriculoEN(): void {
    window.open('https://www.canva.com/design/DAF-pdf-9Es/GB2dltpM5DV3zNJbiT4w6A/view', '_blank');
  }
}
