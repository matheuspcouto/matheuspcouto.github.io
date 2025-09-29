import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit, OnDestroy {
  textoDigitado: string[] = ['Hello World !'];

  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  private typedInstance: any;
  private currentIndex = 0;
  private currentText = '';
  private isDeleting = false;
  private typeSpeed = 100;
  private deleteSpeed = 50;
  private pauseTime = 2000;

  ngOnInit() {
    this.startTypingEffect();
  }

  ngOnDestroy() {
    if (this.typedInstance) {
      clearTimeout(this.typedInstance);
    }
  }

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
