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
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Otimiza detecção de mudanças
    provideRouter(routes), // Rotas da aplicação
    provideAnimations(), // Suporte a animações
    provideToastr(), // Notificações toast
  ]
};
