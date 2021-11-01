import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './page/users/users.component';
import { TableUsersComponent } from './component/table-users/table-users.component';



@NgModule({
  declarations: [
    UsersComponent,
    TableUsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
