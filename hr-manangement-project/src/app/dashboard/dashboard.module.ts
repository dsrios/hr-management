import { ProjectsComponent } from './../dashboard/projects/projects.component';
import { EmployeeComponent } from './../dashboard/employee/employee.component';
import { DashboardDefaultComponent } from './../dashboard/dashboard-default/dashboard-default.component';
import { NgModule } from '@angular/core';

import { DashboardRouting } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:
        [
         CommonModule,
         DashboardRouting
        ],
    exports: [  ],
    declarations: [
        DashboardDefaultComponent,
        EmployeeComponent,
        ProjectsComponent
    ],
    providers: [],
})
export class DashboardModule { }
