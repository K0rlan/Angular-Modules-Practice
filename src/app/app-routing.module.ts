import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './admin-module/user/user.component';
import {GroupComponent} from './admin-module/group/group.component';
import {DashboardComponent} from './admin-module/dashboard/dashboard.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'group', component: GroupComponent},
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
