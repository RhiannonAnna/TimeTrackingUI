import { Component, OnInit } from '@angular/core';
import { TimeTrackingingGroupLogsService } from './time-tracking-group-logs.service';
import { TimeTrackingGroups } from 'src/app/models/time-tracking-groups';
import { TimeTrackingGroupLogs } from 'src/app/models/time-tracking-log';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-time-tracking-group-logs',
  templateUrl: './time-tracking-group-logs.component.html',
  styleUrls: ['./time-tracking-group-logs.component.scss']
})
export class TimeTrackingGroupLogsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'guid', 'description', 'startTime', 'startMethodTime', 'endTime', 'totalTime', 'methodTime', 'job', 'jobTypeId'];
  groupLogsToDisplay = [];

  constructor(private timeTrackingingGroupLogsService: TimeTrackingingGroupLogsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let job: string = this.route.snapshot.paramMap.get('job');

    this.timeTrackingingGroupLogsService.getAllTimeTrackingLogsForSelectedJob(job).subscribe(
      next => {
        this.groupLogsToDisplay = next as TimeTrackingGroupLogs[];
        console.log("All TimeTrakingLogs has been retreived");
      },
      error => {
        console.log("Error", error);
      }
    );
  }

}