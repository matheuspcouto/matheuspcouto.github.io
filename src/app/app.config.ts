/**
 * @Configuração appConfig
 *
 * Arquivo responsável por centralizar as configurações e providers globais da aplicação Angular.
 * Inclui rotas, animações, interceptors, Toastr, HttpClient, entre outros.
 *
 * @author Matheus Pimentel Do Couto
 * @created 10/07/2025
 * @updated 10/07/2025
 */
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi, withFetch, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { MpcHttpLoaderInterceptor } from 'mpc-lib-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Otimiza detecção de mudanças
    provideRouter(routes), // Rotas da aplicação
    provideClientHydration(withEventReplay()), // Hidratação SSR com replay de eventos
    provideAnimations(), // Suporte a animações
    provideToastr(), // Notificações toast
    provideHttpClient(withInterceptorsFromDi(), withFetch()), // HTTP com interceptors e fetch
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MpcHttpLoaderInterceptor,
      multi: true
    } // Interceptor para loaders
  ]
};
