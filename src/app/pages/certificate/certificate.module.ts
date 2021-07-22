import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthCertificateComponent } from './birth-certificate/birth-certificate.component';
import { DeathCertificateComponent } from './death-certificate/death-certificate.component';
import { MarriageCertificateComponent } from './marriage-certificate/marriage-certificate.component';
import { DivorceCertificateComponent } from './divorce-certificate/divorce-certificate.component';
import { CertificateRoutingModule } from './certitficate-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BirthCertificateComponent, DeathCertificateComponent, MarriageCertificateComponent, DivorceCertificateComponent],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    ReactiveFormsModule
  ]
})
export class CertificateModule { }
