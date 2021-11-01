import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './page/users/users.component';
import { TableUsersComponent } from './component/table-users/table-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRoutingModule } from './users.module.routing';
import { MatTableModule } from '@angular/material/table'  

@NgModule({
  declarations: [
    UsersComponent,
    TableUsersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
  ],
  exports: [
    UsersComponent,
  ]
})
export class UsersModule { }