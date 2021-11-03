import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Users } from 'src/app/models/users-table.model';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})


export class TableUsersComponent implements OnInit {

  displayedColumns: string[] = ['profile', 'login', 'type'];
  @Output() sortAndOrder = new EventEmitter<Sort>();
  @Input() list: Users[];
  constructor() {}

  sortBy(event: Sort): void {
    this.sortAndOrder.emit(event);
  }

  ngOnInit(): void {}

}
