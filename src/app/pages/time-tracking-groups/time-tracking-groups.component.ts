import { Component, OnInit } from '@angular/core';
import { TimeTrackingGroupsService } from './time-tracking-groups.service';
import { JobType } from 'src/app/models/job-type';
import { JobTypeService } from 'src/app/shared/job-type.service';
import { TimeTrackingGroups } from 'src/app/models/time-tracking-groups';

@Component({
  selector: 'app-time-tracking-groups',
  templateUrl: './time-tracking-groups.component.html',
  styleUrls: ['./time-tracking-groups.component.scss']
})
export class TimeTrackingGroupsComponent implements OnInit {
  displayedColumns: string[] = ['job', 'guid', 'jobTypeId', 'count', 'seeDetails'];

  selectedItemId: number = 0;
  jobToBeSearch: string = "";
  guidToBeSearch: string = "";

  groupsToDisplay: TimeTrackingGroups[] = [];
  allJobTypes: JobType[] = [];

  constructor(private timeTrackingGroupsService: TimeTrackingGroupsService, private jobTypeService: JobTypeService) { }

  ngOnInit() {

    this.jobTypeService.getAllJobTypes().subscribe(
      next => {
        this.allJobTypes = next as JobType[];
        console.log("All JobTypes has been retreived");
      },
      error => {
        console.log("Error", error);
      }
    );
  }
  filterListTimeTracking(): void {
    this.timeTrackingGroupsService.getTimeTrackingGroups(this.guidToBeSearch, this.jobToBeSearch, this.selectedItemId).subscribe(
      next => {
        this.groupsToDisplay = next as TimeTrackingGroups[];
        console.log("All TimeTrakingLogs has been retreived");
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}
