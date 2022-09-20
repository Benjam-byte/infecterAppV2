import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./public/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'param',
    loadChildren: () => import('./public/param/param.module').then( m => m.ParamPageModule)
  },
  {
    path: 'select-party-param',
    loadChildren: () => import('./public/select-party-param/select-party-param.module').then( m => m.SelectPartyParamPageModule)
  },
  {
    path: 'select-bilan-sanguin',
    loadChildren: () => import('./public/select-bilan-sanguin/select-bilan-sanguin.module').then( m => m.SelectBilanSanguinPageModule)
  },
  {
    path: 'night',
    loadChildren: () => import('./public/night/night.module').then( m => m.NightPageModule)
  },
  {
    path: 'rules',
    loadChildren: () => import('./public/rules/rules.module').then( m => m.RulesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
