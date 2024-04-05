import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./front-page/front-page.module').then( m => m.HomePageModule)
  },
  {
    path: 'getting-started',
    loadChildren: () => import('./getting-started/getting-started.module').then( m => m.GettingStartedPageModule)
  },
  {
    path: 'machine',
    loadChildren: () => import('./machine/machine.module').then( m => m.MachinePageModule)
  },
  {
    path: 'wash-machine',
    loadChildren: () => import('./wash-machine/wash-machine.module').then( m => m.WashMachinePageModule)
  },
  {
    path: 'dry-machine',
    loadChildren: () => import('./dry-machine/dry-machine.module').then( m => m.DryMachinePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
