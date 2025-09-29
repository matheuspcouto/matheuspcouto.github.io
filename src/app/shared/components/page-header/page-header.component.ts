import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit, OnDestroy {

  /** Textos a serem digitados na animação */
  private textoDigitado: string[] = ['Hello World !'];

  /** Referência ao elemento onde o texto será digitado */
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  /** Instância do timeout para a animação de digitação */
  private typedInstance: any;
  /** Índice atual do texto sendo digitado */
  private currentIndex = 0;
  /** Texto atualmente exibido */
  private currentText = '';
  /** Indica se o texto está sendo apagado */
  private isDeleting = false;
  /** Velocidade de digitação e apagamento */
  private typeSpeed = 100;
  /** Velocidade de apagamento */
  private deleteSpeed = 50;
  /** Tempo de pausa ao finalizar a digitação de uma palavra */
  private pauseTime = 2000;

  ngOnInit() {
    this.startTypingEffect();
  }

  ngOnDestroy() {
    if (this.typedInstance) {
      clearTimeout(this.typedInstance);
    }
  }

  /**
   * Inicia o efeito de digitação no elemento referenciado.
   */
  private startTypingEffect(): void {
    const element = this.typedElement.nativeElement;
    const fullText = this.textoDigitado[this.currentIndex];

    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = fullText.substring(0, this.currentText.length + 1);
    }

    element.textContent = this.currentText;

    let speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.currentText === fullText) {
      speed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.textoDigitado.length;
    }

    this.typedInstance = setTimeout(() => this.startTypingEffect(), speed);
  }
}
