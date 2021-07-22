import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';




const routes: Routes = [
    {path:'create-account',component:CreateAccountComponent},
    {path:'edit-account',component:EditAccountComponent},
    {path:'list-account',component:ListAccountComponent},
    {path:'profile-detail',component:ProfileDetailComponent},
    {path:'profile-edit',component:ProfileEditComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountManagerRoutingModule { }
