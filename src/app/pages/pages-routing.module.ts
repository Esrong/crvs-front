import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/models/auth.guard';
import { Role } from '../core/models/role';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
    { path: '', component: DashboardComponent },
    {path:'registration',loadChildren:()=>import('./registration/registration.module').then(m=>m.RegistrationModule), canActivate: [AuthGuard]},
    {path:'certificate',loadChildren:()=>import('./certificate/certificate.module').then(m=>m.CertificateModule), canActivate: [AuthGuard]},
    {path:'statistics',loadChildren:()=>import('./statistics/statistics.module').then(m=>m.StatisticsModule), canActivate: [AuthGuard]},
    {path:'account-manager',loadChildren:()=>import('./account-manager/account-manager.module').then(m=>m.AccountManagerModule), canActivate: [AuthGuard], data: { roles: [Role.Admin] }},
    {path:'registred',loadChildren:()=>import('./registred/registred.module').then(m=>m.RegistredModule)}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
