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
  // {
  //   path: '**', // Wildcard route for undefined paths (e.g., 404 page)
  //   redirectTo: 'home'
  // },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'dry-payment',
    loadChildren: () => import('./dry-payment/dry-payment.module').then( m => m.DryPaymentPageModule)
  },
  {
    path: 'dry-payment-status',
    loadChildren: () => import('./dry-payment-status/dry-payment-status.module').then( m => m.DryPaymentStatusPageModule)
  },
  {
    path: 'wash-timer',
    loadChildren: () => import('./wash-timer/wash-timer.module').then( m => m.WashTimerPageModule)
  },
  {
    path: 'dry-timer',
    loadChildren: () => import('./dry-timer/dry-timer.module').then( m => m.DryTimerPageModule)
  },
  {
    path: 'dry-payment-page1',
    loadChildren: () => import('./dry-payment-page1/dry-payment-page1.module').then( m => m.DryPaymentPage1PageModule)
  },
  {
    path: 'wash-payment-page1',
    loadChildren: () => import('./wash-payment-page1/wash-payment-page1.module').then( m => m.WashPaymentPage1PageModule)
  },
  {
    path: 'wash-payment-page2',
    loadChildren: () => import('./wash-payment-page2/wash-payment-page2.module').then( m => m.WashPaymentPage2PageModule)
  },
  {
    path: 'wash-payment-page3',
    loadChildren: () => import('./wash-payment-page3/wash-payment-page3.module').then( m => m.WashPaymentPage3PageModule)
  },
  {
    path: 'wash-payment-page4',
    loadChildren: () => import('./wash-payment-page4/wash-payment-page4.module').then( m => m.WashPaymentPage4PageModule)
  },
  {
    path: 'dry-payment-page2',
    loadChildren: () => import('./dry-payment-page2/dry-payment-page2.module').then( m => m.DryPaymentPage2PageModule)
  },
  {
    path: 'dry-payment-page3',
    loadChildren: () => import('./dry-payment-page3/dry-payment-page3.module').then( m => m.DryPaymentPage3PageModule)
  },
  {
    path: 'dry-payment-page4',
    loadChildren: () => import('./dry-payment-page4/dry-payment-page4.module').then( m => m.DryPaymentPage4PageModule)
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
