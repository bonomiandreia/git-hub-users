import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Items } from 'src/app/models/users-response.model';
import { Users } from 'src/app/models/users-table.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  usersList: Users[];
  private readonly unsubscribe$: Subject<void>;
  terminate = new Subject();


  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.callServiceUsers();
  }

  callServiceUsers(): void {
    this.usersService.getListUser()
    .pipe(takeUntil(this.terminate))
    .subscribe((res: { total: number, items: Users[] }) => {
      this.usersList = res.items
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
