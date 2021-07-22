import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiviRegistredComponent } from './civi-registred/civi-registred.component';
import { BirthRegistredComponent } from './birth-registred/birth-registred.component';
import { DeathRegistredComponent } from './death-registred/death-registred.component';
import { MarriageRegistredComponent } from './marriage-registred/marriage-registred.component';
import { DivorceRegistredComponent } from './divorce-registred/divorce-registred.component';
import { RegistredRoutingModule } from './registred-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from 'src/app/shared/ui/ui.module';



@NgModule({
  declarations: [CiviRegistredComponent, BirthRegistredComponent, DeathRegistredComponent, MarriageRegistredComponent, DivorceRegistredComponent],
  imports: [
    CommonModule,
    RegistredRoutingModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class RegistredModule { }
