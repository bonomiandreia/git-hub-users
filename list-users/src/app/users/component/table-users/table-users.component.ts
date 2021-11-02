import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users-table.model';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})


export class TableUsersComponent implements OnInit {

  displayedColumns: string[] = ['profile', 'login', 'type'];
  @Input() list: Users[];
  constructor() {}

  

  ngOnInit(): void {}

}
