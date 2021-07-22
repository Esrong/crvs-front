import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthCertificateComponent } from './birth-certificate/birth-certificate.component';
import { DeathCertificateComponent } from './death-certificate/death-certificate.component';
import { DivorceCertificateComponent } from './divorce-certificate/divorce-certificate.component';
import { MarriageCertificateComponent } from './marriage-certificate/marriage-certificate.component';

const routes: Routes = [
    {
        path: 'birthc',
        component: BirthCertificateComponent
    },
    {
        path: 'deathc',
        component: DeathCertificateComponent
    },
    {
        path: 'marriagec',
        component: MarriageCertificateComponent
    },
    {
        path: 'divorcec',
        component: DivorceCertificateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CertificateRoutingModule { }
