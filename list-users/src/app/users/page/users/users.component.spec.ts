import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { TableUsersComponent } from '../../component/table-users/table-users.component';
import { HttpClientModule } from '@angular/common/http';
import { MockModule } from 'ng-mocks';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { UsersService } from '../../../services/users.service';
import { UserMockService } from '../../../mocks/mock-users.service';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';


describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let service: UsersService;
  let snack: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent, TableUsersComponent ],
      imports: [ HttpClientModule, 

        MatSnackBarModule,
        MockModule(MatInputModule), 
        MockModule(MatTableModule), 
        MockModule(MatPaginatorModule), 
        MockModule(ReactiveFormsModule),
        MockModule(MatSortModule)
      ],
      providers: [
        UsersService,
        MatSnackBar,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UsersService);
    snack = TestBed.inject(MatSnackBar);
    fixture.detectChanges();

  });

  afterAll(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call init', () => {
    const onResetSpy = jest.spyOn(component, 'resetFilters');
    const onSearchSpy = jest.spyOn(component, 'onSearch');
    component.ngOnInit();
    expect(onResetSpy).toHaveBeenCalled();
    expect(onSearchSpy).toHaveBeenCalled();
  });

  it('should call change Sort', () => {
    const onServiceSpy = jest.spyOn(component, 'callServiceUsers');
    component.changeSort({ active: 'login', direction: 'asc'});
    expect(onServiceSpy).toHaveBeenCalled();
  });


  it('should defined as asc if filter direction empty', () => {
    const onServiceSpy = jest.spyOn(component, 'callServiceUsers');
    component.changeSort({ active: 'login', direction: ''});

    expect(component.filters.order).toBe('desc');
    expect(onServiceSpy).toHaveBeenCalled();
  });

  it('should defined filters', () => {

    component.resetFilters();

    expect(component.filters.per_page).toBe(9);
    expect(component.filters.page).toBe(1);


  });

  it('should call service (success)', () => {

    const onServiceSpy = jest.spyOn(service, 'getListUser').mockReturnValue(of({
      total: 0,
      items: []
    }));

    component.callServiceUsers();
    expect(onServiceSpy).toHaveBeenCalled();
  });

  it('should call service (error)', () => {
    const matSnackSpy = jest.spyOn(snack, 'open');
    const onServiceSpy = jest.spyOn(service, 'getListUser').mockReturnValue(throwError({}));

    component.callServiceUsers();
    expect(onServiceSpy).toHaveBeenCalled();
    expect(matSnackSpy).toHaveBeenCalled();
  });



});
