import { Injectable } from '@angular/core';
import { TimeTrackingGroups } from 'src/app/models/time-tracking-groups';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TimeTrackingGroupsService {

    baseUrl: string = "https://localhost:44337";
    timeTrakingGroupUrl: string = "api/timeTrackingGroup";

    constructor(private http: HttpClient) { }

    getTimeTrackingGroups(guid: string, job: string, jobTypeId: number): Observable<TimeTrackingGroups[]> {
        return this.http.get<TimeTrackingGroups[]>(`${this.baseUrl}/${this.timeTrakingGroupUrl}?guid=${guid}&job=${job}&jobTypeId=${jobTypeId}`);
    }
}