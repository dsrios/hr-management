import { PageNotFoundComponent } from './../shared/page-not-found/page-not-found.component';
import { DashboardDefaultComponent } from './../dashboard/dashboard-default/dashboard-default.component';
import { ProjectsComponent } from './../dashboard/projects/projects.component';
import { EmployeeComponent } from './../dashboard/employee/employee.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from '../app.guard';

const dashboardRoutes: Routes = [

    {
        // path: 'animals', // Cmabia para activar lazy loading
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {path: 'employee', component: EmployeeComponent, canActivate: [AppGuard]},
            {path: 'projects', component: ProjectsComponent, canActivate: [AppGuard]},
            {path: 'default', component: DashboardDefaultComponent, canActivate: [AppGuard]},
            {path: '', component: DashboardDefaultComponent},
            {path: '**', component: PageNotFoundComponent}
        ]
    }

    ];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: [AppGuard]
})
export class DashboardRouting { }
