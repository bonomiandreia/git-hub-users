import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './page/users/users.component';

export const ROUTES: Routes = [
    { path: '', component: UsersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],


exports: [RouterModule],
})
export class UserRoutingModule { 

}