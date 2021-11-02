import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users-table.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  usersList = Array();
  total = 0;

  ngOnInit(): void {

    this.usersService.getListUser().subscribe((res: { total: number, items: Users[] }) => {
      this.usersList = res.items;
    })
    
  }

}
