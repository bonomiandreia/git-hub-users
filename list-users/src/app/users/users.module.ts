import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './page/users/users.component';
import { TableUsersComponent } from './component/table-users/table-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRoutingModule } from './users.module.routing';

@NgModule({
  declarations: [
    UsersComponent,
    TableUsersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  exports: [
    UsersComponent,
  ]
})
export class UsersModule { }
