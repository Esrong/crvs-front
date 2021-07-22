import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthRegistredComponent } from './birth-registred/birth-registred.component';
import { CiviRegistredComponent } from './civi-registred/civi-registred.component';
import { DeathRegistredComponent } from './death-registred/death-registred.component';
import { DivorceRegistredComponent } from './divorce-registred/divorce-registred.component';
import { MarriageRegistredComponent } from './marriage-registred/marriage-registred.component';




const routes: Routes = [
    {path:'civil-registred',component:CiviRegistredComponent},
    {path:'birth-registred',component:BirthRegistredComponent},
    {path:'death-registred',component:DeathRegistredComponent},
    {path:'marriage-registred',component:MarriageRegistredComponent},
    {path:'divorce',component:DivorceRegistredComponent}
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistredRoutingModule { }
