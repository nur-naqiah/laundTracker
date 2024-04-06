import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'wash-machine',
    loadChildren: () => import('./wash-machine/wash-machine.module').then(m => m.WashMachinePageModule)
  },
  {
    path: 'dry-machine',
    loadChildren: () => import('./dry-machine/dry-machine.module').then(m => m.DryMachinePageModule)
  },
  {
    path: '**', // Wildcard route for undefined paths (e.g., 404 page)
    redirectTo: 'home'
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'payment-success',
    loadChildren: () => import('./payment-success/payment-success.module').then( m => m.PaymentSuccessPageModule)
  },
  {
    path: 'wash-timer',
    loadChildren: () => import('./wash-timer/wash-timer.module').then( m => m.WashTimerPageModule)
  },
  {
    path: 'dry-timer',
    loadChildren: () => import('./dry-timer/dry-timer.module').then( m => m.DryTimerPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: false // Set to true for debugging route events
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
