import { PageNotFoundComponent } from './../shared/page-not-found/page-not-found.component';
import { DashboardDefaultComponent } from './../dashboard/dashboard-default/dashboard-default.component';
import { ProjectsComponent } from './../dashboard/projects/projects.component';
import { EmployeeComponent } from './../dashboard/employee/employee.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const dashboardRoutes: Routes = [

    {
        // path: 'animals', // Cmabia para activar lazy loading
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {path: 'employee', component: EmployeeComponent},
            {path: 'projects', component: ProjectsComponent},
            {path: 'default', component: DashboardDefaultComponent},
            {path: '', component: DashboardDefaultComponent},
            {path: '**', component: PageNotFoundComponent}
        ]
    }

    ];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    declarations: [],
})
export class DashboardRouting { }
