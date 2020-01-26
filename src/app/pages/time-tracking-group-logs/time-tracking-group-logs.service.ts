import { Injectable } from '@angular/core';
import { TimeTrackingGroupLogs } from 'src/app/models/time-tracking-log';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TimeTrackingingGroupLogsService {

    baseUrl: string = "https://localhost:44337";
    timeTrakingLogs: string = "api/timeTrackingLog";

    constructor(private http: HttpClient) { }

    getAllTimeTrackingLogsForSelectedJob(job: string): Observable<TimeTrackingGroupLogs[]> {
        return this.http.get<TimeTrackingGroupLogs[]>(`${this.baseUrl}/${this.timeTrakingLogs}/selectedJob?job=${job}`);
    }
}