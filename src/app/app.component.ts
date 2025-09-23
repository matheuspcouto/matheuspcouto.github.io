import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MpcBtnFloatComponent, MpcLoaderComponent, MpcNavbarComponent, MpcPageHeaderHomeComponent, NavbarConfig } from 'mpc-lib-angular';
import { NavigationEnd, Router } from '@angular/router';
import { Rotas } from './shared/enums/rotas-enum';
import { ArtigosComponent } from './shared/components/artigos/artigos.component';
import { CarreiraComponent } from './shared/components/carreira/carreira.component';
import { CertificacoesComponent } from './shared/components/certificacoes/certificacoes.component';
import { HabilidadesComponent } from './shared/components/habilidades/habilidades.component';
import { MpcFooterComponent } from './shared/components/mpc-footer/mpc-footer.component';
import { ProjetosComponent } from './shared/components/projetos/projetos.component';
import { SobreComponent } from './shared/components/sobre/sobre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SobreComponent,
    HabilidadesComponent,
    CertificacoesComponent,
    ArtigosComponent,
    CarreiraComponent,
    ProjetosComponent,
    MpcPageHeaderHomeComponent,
    MpcNavbarComponent,
    MpcFooterComponent,
    MpcLoaderComponent,
    MpcBtnFloatComponent
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
   * Define estado de carregamento da aplicação.
   * @type {boolean}
   */
  protected carregando: boolean = false;

  /**
   * Define visualização do botão de voltar ao topo.
   * @type {boolean}
   */
  protected showScrollTop: boolean = false;

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
    { id: 'contato', titulo: 'Contato', rota: Rotas.CONTATO, icone: 'bi bi-envelope-fill' },
    {
      id: 'curriculo',
      titulo: 'Currículo',
      icone: 'bi bi-filetype-html',
      subRotas: [
        { id: 'pt-br', titulo: 'PT-BR', rota: '' },
        { id: 'en-us', titulo: 'EN-US', rota: '' },
      ]
    },
  ];

  /**
   * Inicializa o componente e adiciona listener para controlar a visibilidade do botão de scroll para o topo.
   * @returns {void}
   */
  ngOnInit(): void {
    this.carregando = true;
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        this.showScrollTop = scrollPosition > 300;
      });

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    this.carregando = false;
  }

  /**
   * Realiza a rolagem suave para o topo da página.
   * @returns {void}
   */
  protected scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
