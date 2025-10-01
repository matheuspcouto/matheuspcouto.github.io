import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { ArtigosComponent } from './shared/components/artigos/artigos.component';
import { CarreiraComponent } from './shared/components/carreira/carreira.component';
import { CertificacoesComponent } from './shared/components/certificacoes/certificacoes.component';
import { HabilidadesComponent } from './shared/components/habilidades/habilidades.component';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';
import { ProjetosComponent } from './shared/components/projetos/projetos.component';
import { SobreComponent } from './shared/components/sobre/sobre.component';
import { MpcBtnFloatComponent, MpcLoaderComponent, NavbarConfig, MpcNavbarComponent, MpcLoaderService } from 'mpc-lib-angular';
import AOS from 'aos';
import { Rotas } from './shared/enums/rotas-enum';
import { MpcFooterComponent } from './shared/components/mpc-footer/mpc-footer.component';
import { ContatoComponent } from './shared/components/contato/contato.component';

@Component({
  selector: 'app-root',
  imports: [
    PageHeaderComponent,
    SobreComponent,
    HabilidadesComponent,
    CertificacoesComponent,
    ArtigosComponent,
    CarreiraComponent,
    ProjetosComponent,
    ContatoComponent,
    MpcNavbarComponent,
    MpcFooterComponent,
    MpcLoaderComponent,
    MpcBtnFloatComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  /**
   * Inicializa o componente de identificação de plataforma.
  */
  private readonly platformId: any = inject(PLATFORM_ID);

  /**
   * Define as rotas da aplicação.
   * @type {Router}
   */
  private readonly router: Router = inject(Router);

  /**
   * Controla o estado de carregamento da aplicação.
   * @type {boolean}
   */
  private readonly loaderService: MpcLoaderService = inject(MpcLoaderService);

  /**
   * Abas de navegação exibidas na barra superior.
   * @type {NavbarConfig[]}
   */
  protected abas: NavbarConfig[] = [
    { id: 'home', titulo: 'Home', rota: Rotas.HOME, icone: 'bi bi-house-fill' },
    { id: 'sobre', titulo: 'Sobre', rota: Rotas.SOBRE, icone: 'bi bi-person-fill' },
    { id: 'habilidades', titulo: 'Habilidades', rota: Rotas.HABILIDADES, icone: 'bi bi-lightning-fill' },
    { id: 'certificacoes', titulo: 'Certificações', rota: Rotas.CERTIFICACOES, icone: 'bi bi-award-fill' },
    { id: 'artigos', titulo: 'Artigos', rota: Rotas.ARTIGOS, icone: 'bi bi-journal-text' },
    { id: 'carreira', titulo: 'Carreira', rota: Rotas.CARREIRA, icone: 'bi bi-briefcase-fill' },
    { id: 'projetos', titulo: 'Projetos', rota: Rotas.PROJETOS, icone: 'bi bi-folder-fill' },
    { id: 'contato', titulo: 'Contato', rota: Rotas.CONTATO, icone: 'bi bi-envelope-fill' }
  ];

  /**
   * Inicializa o componente e adiciona listener para controlar a visibilidade do botão de scroll para o topo.
   * @returns {void}
   */
  ngOnInit(): void {

    this.loaderService.show();

    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    setTimeout(() => this.loaderService.hide(), 2000);
  }

  /**
   * Abre o WhatsApp em uma nova aba para contato.
   * @returns {void}
   */
  protected abrirWhatsApp(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://wa.me/55639992014337', '_blank');
    }
  }
}
