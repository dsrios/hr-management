import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardDefaultComponent } from './dashboard/dashboard-default/dashboard-default.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

// inMemory service
import { LoginService } from './login/login.service';
import { DataService } from './shared/data.service';

// Material Modules
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    // DashboardDefaultComponent,
    // EmployeeComponent,
    // ProjectsComponent,
    NavBarComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(LoginService),
    // HttpClientInMemoryWebApiModule.forRoot(DataService),
    MatCardModule,
    MatButtonModule,
    MatSidenavModule

  ],
  providers: [ LoginService, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
