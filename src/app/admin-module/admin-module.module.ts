import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {GroupService} from './services/groups.service';
import {LoggingService} from './services/logging.service';
import {UserService} from './services/users.service';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [UserComponent, GroupComponent, DashboardComponent],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [UserService, LoggingService, GroupService]
})
export class AdminModuleModule { }
