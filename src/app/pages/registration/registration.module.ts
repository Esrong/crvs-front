import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthRegistrationComponent } from './birth-registration/birth-registration.component';
import { DeathRegistrationComponent } from './death-registration/death-registration.component';
import { MarriageRegistrationComponent } from './marriage-registration/marriage-registration.component';
import { DivorceRegistrationComponent } from './divorce-registration/divorce-registration.component';
import { RegistratioinRoutingModule } from './registration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { UiModule } from 'src/app/shared/ui/ui.module';



@NgModule({
  declarations: [BirthRegistrationComponent, DeathRegistrationComponent, MarriageRegistrationComponent, DivorceRegistrationComponent],
  imports: [
    CommonModule,
    RegistratioinRoutingModule,
    ReactiveFormsModule,
    ArchwizardModule,
    UiModule,
    FormsModule
  ]
})
export class RegistrationModule { }
