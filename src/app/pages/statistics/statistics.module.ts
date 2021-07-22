import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarriageStatisticsComponent } from './marriage-statistics/marriage-statistics.component';
import { DivorceStatisticsComponent } from './divorce-statistics/divorce-statistics.component';
import { BirthStatisticsComponent } from './birth-statistics/birth-statistics.component';
import { DeathStatisticsComponent } from './death-statistics/death-statistics.component';
import { StatisticsRoutingModule } from './statistics-routing.module';



@NgModule({
  declarations: [MarriageStatisticsComponent, DivorceStatisticsComponent, BirthStatisticsComponent, DeathStatisticsComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
