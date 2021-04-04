import {Injectable} from '@angular/core';
import {User} from '../user';
import {LoggingService} from './logging.service';

@Injectable()
export class UserService {

  constructor(
    private loggingService: LoggingService) {
  }

  getUsers() {
    let userList: User[];
    userList = [
      new User(1, 'Farabi', 24),
      new User(2, 'Aruzhan', 21),
      new User(3, 'Korlan', 20),
      new User(4, 'Shynar', 20),
      new User(5, 'Tolganai', 123),
      new User(6, 'Aru', 52),
    ];
    this.loggingService.log('List of users: ' + userList);

    return userList;
  }
}
