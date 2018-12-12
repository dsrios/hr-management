import { ProjectsComponent } from './../dashboard/projects/projects.component';
import { EmployeeComponent } from './../dashboard/employee/employee.component';
import { DashboardDefaultComponent } from './../dashboard/dashboard-default/dashboard-default.component';
import { NgModule } from '@angular/core';

import { DashboardRouting } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';

// Service Module and dummy DB
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../shared/data.service';

// Material Module
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports:
        [
         CommonModule,
         DashboardRouting,
         MatButtonModule,
         HttpClientModule
         // HttpClientInMemoryWebApiModule.forRoot(DataService),
        ],
    exports: [ DashboardRouting ],
    declarations: [
        DashboardDefaultComponent,
        EmployeeComponent,
        ProjectsComponent
    ],
    providers: [],
})
export class DashboardModule { }
