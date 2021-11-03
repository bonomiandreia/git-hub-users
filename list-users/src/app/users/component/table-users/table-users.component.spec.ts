import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { TableUsersComponent } from './table-users.component';
import { MatTableModule } from '@angular/material/table';
import { usersMock } from '../../../mocks/users-mock';
import { SortDirection } from '@angular/material/sort';

describe('TableUsersComponent', () => {
  let component: TableUsersComponent;
  let fixture: ComponentFixture<TableUsersComponent>;
  const mockCol = ['profile', 'login', 'type'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUsersComponent ],
      imports: [
        MockModule(MatTableModule)
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.displayedColumns = mockCol;
    component.list = usersMock;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call sortBy', () => {
    const spyEventEmmiter = jest.spyOn(component.sortAndOrder, 'emit');

    const eventSpy = {
      active: 'login',
      direction: 'asc' as SortDirection
    }

    component.sortBy(eventSpy);
    expect(spyEventEmmiter).toHaveBeenCalledWith(eventSpy);
  });

});
