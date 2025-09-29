import { Routes } from '@angular/router';
import { SegmentoRotas } from './shared/enums/rotas-enum';

export const routes: Routes = [
  /*  Rotas para Home */
  {
    path: SegmentoRotas.HOME,
    pathMatch: 'full',
    redirectTo: ''
  }
];
