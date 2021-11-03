import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './page/users/users.component';
import { TableUsersComponent } from './component/table-users/table-users.component';
import { UserRoutingModule } from './users.module.routing';
import { MatTableModule } from '@angular/material/table'  
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    UsersComponent,
    TableUsersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  exports: [
    UsersComponent,
  ],
})
export class UsersModule { }
