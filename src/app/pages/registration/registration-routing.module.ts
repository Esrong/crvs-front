import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthRegistrationComponent } from './birth-registration/birth-registration.component';
import { DeathRegistrationComponent } from './death-registration/death-registration.component';
import { DivorceRegistrationComponent } from './divorce-registration/divorce-registration.component';
import { MarriageRegistrationComponent } from './marriage-registration/marriage-registration.component';

const routes: Routes = [
    {
        path: 'birth',
        component: BirthRegistrationComponent
    },
    {
        path: 'death',
        component: DeathRegistrationComponent
    },
    {
        path: 'marriage',
        component: MarriageRegistrationComponent
    },
    {
        path: 'divorce',
        component: DivorceRegistrationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistratioinRoutingModule { }
