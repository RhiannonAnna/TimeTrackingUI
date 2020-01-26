import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTrackingGroupsComponent } from './pages/time-tracking-groups/time-tracking-groups.component';
import { TimeTrackingGroupLogsComponent } from './pages/time-tracking-group-logs/time-tracking-group-logs.component';

const routes: Routes = [
  { path: 'groups', component: TimeTrackingGroupsComponent },
  { path: 'group-logs/:job', component: TimeTrackingGroupLogsComponent },
  { path: '', redirectTo: 'groups', pathMatch: 'full' },
  { path: '**', component: TimeTrackingGroupsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
