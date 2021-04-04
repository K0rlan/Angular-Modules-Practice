import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/users.service';
import {User} from '../user';
import {LoggingService} from '../services/logging.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, LoggingService]
})
export class UserComponent implements OnInit {

  userList: User[] | undefined;

  constructor(private userService: UserService) {

  }

  getUsers() {
    this.userList = this.userService.getUsers();
  }
  ngOnInit(): void {
  }

}
