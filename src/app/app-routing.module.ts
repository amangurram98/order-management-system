import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'main-dashboard', component:MainDashboardComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule { }
