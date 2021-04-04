import { Component, OnInit } from '@angular/core';
import {GroupService} from '../services/groups.service';
import {LoggingService} from '../services/logging.service';
import {Group} from '../group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [GroupService, LoggingService]
})
export class GroupComponent implements OnInit {

  groupList: Group[] | undefined;

  constructor(private groupService: GroupService) {

  }

  getGroup() {
    this.groupList = this.groupService.getGroup();
  }

  ngOnInit(): void {
  }

}
