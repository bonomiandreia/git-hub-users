import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/app/models/users-response.model';
import { Users } from 'src/app/models/users-table.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: Users[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {

    this.usersService.getListUser().subscribe((res: { total: number, items: Users[]}) => {
      this.usersList = res.items
    })
    
  }

}
