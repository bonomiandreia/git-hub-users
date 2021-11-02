import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, map, switchMap, tap } from 'rxjs/operators';
import { Items } from 'src/app/models/users-response.model';
import { Users } from 'src/app/models/users-table.model';
import { UsersService } from '../../../services/users.service';
import { Filters } from '../../../models/filters.model';

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
  filters: Filters = {};


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
          this.filters.login = res;
          this.callServiceUsers();
        })
      )
      .subscribe();
  } 

  callServiceUsers() {
    this.usersService
      .getListUser(this.filters.login)
      .pipe(takeUntil(this.terminate))
      .subscribe((res: { total: number, items: Users[] }) => {
        this.usersList = res.items;
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
