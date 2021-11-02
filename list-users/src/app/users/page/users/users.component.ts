import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, map, switchMap, tap } from 'rxjs/operators';
import { Items } from 'src/app/models/users-response.model';
import { Users } from 'src/app/models/users-table.model';
import { UsersService } from '../../../services/users.service';
import { Filters } from '../../../models/filters.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  usersList: Users[] = [];
  private readonly unsubscribe$: Subject<void>;
  terminate = new Subject();
  search: FormControl = new FormControl();
  filters: Filters = {
    sort: 'login',
    per_page: 9,
    page: 1,
  };
  key: string;
  total: number;


  constructor(private usersService: UsersService, private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch(): void {
    this.search.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        tap(async (res) => {
          this.key = res;
          this.callServiceUsers();
        })
      )
      .subscribe();
  } 

  changePage(event: PageEvent): void {
    const pageIndex = event.pageIndex + 1;
    this.filters.page = pageIndex;
    this.callServiceUsers();
  }

  callServiceUsers() {
    this.usersService
      .getListUser(this.key, this.filters.sort, this.filters.per_page, this.filters.page)
      .pipe(takeUntil(this.terminate))
      .subscribe((res: { total: number, items: Users[] }) => {
        this.usersList = res.items;
        this.total = res.total;
      },
      error => { 
        this.usersList = [];
        this.snack.open(error.message, undefined,  {
        duration: 2500
      })
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
