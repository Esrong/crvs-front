import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { AccountManagerRoutingModule } from './account-manager-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListAccountComponent } from './list-account/list-account.component';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbAlertModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ArchwizardModule } from 'angular-archwizard';
import { DropzoneModule } from 'ngx-dropzone-wrapper';




@NgModule({
  declarations: [CreateAccountComponent, EditAccountComponent, ProfileDetailComponent, ProfileEditComponent, ListAccountComponent],
  imports: [
    CommonModule,
    AccountManagerRoutingModule,
    ReactiveFormsModule,
    UiModule,
    SharedModule,
    FormsModule,
    ArchwizardModule,
    NgbAlertModule,


    NgSelectModule,


    NgbDatepickerModule,
    DropzoneModule
   

    
  ]
})
export class AccountManagerModule { }
