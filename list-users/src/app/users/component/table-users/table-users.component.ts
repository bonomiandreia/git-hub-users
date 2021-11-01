import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})


export class TableUsersComponent implements OnInit {

  ELEMENT_DATA = [];

  displayedColumns: string[] = ['profile', 'login', 'type'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
