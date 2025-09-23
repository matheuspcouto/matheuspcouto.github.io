/**
 * @Componente MpcFooterComponent
 * Este componente é responsável por exibir o rodapé da aplicação.
 *
 * @Exemplo de utilização:
 * <mpc-footer></mpc-footer>
 *
 * @author Matheus Pimentel Do Couto
 * @created 27/02/2025
 * @updated 04/07/2025
 */

import { Component } from '@angular/core';

@Component({
  selector: 'mpc-footer',
  standalone: true,
  imports: [],
  templateUrl: './mpc-footer.component.html',
  styleUrls: ['./mpc-footer.component.scss']
})
export class MpcFooterComponent {

  protected anoAtual = new Date().getFullYear();
}
