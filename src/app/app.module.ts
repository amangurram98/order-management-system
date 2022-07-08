import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'bootstrap/dist/js/bootstrap.bundle';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataServiceService } from './services/data-service.service';
import { Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    LoginComponent,
    MainDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule, 
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
  
  ],
  providers: [ DataServiceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
