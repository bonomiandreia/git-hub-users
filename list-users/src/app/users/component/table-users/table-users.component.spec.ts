import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';

import { TableUsersComponent } from './table-users.component';
import { MatTableModule } from '@angular/material/table';

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
