import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { TableUsersComponent } from '../../component/table-users/table-users.component';
import { HttpClientModule } from '@angular/common/http';
import { MockModule } from 'ng-mocks';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent, TableUsersComponent ],
      imports: [HttpClientModule, MockModule(MatInputModule), MockModule(MatTableModule), MatSnackBarModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
