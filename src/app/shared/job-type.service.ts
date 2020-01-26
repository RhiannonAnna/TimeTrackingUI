import { Injectable } from '@angular/core';
import { JobType } from 'src/app/models/job-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobTypeService {

  baseUrl: string = "https://localhost:44337";
  jobTypesUrl: string = "api/jobtypes";

  constructor(private http: HttpClient) { }

  getAllJobTypes(): Observable<JobType[]> {
    return this.http.get<JobType[]>(`${this.baseUrl}/${this.jobTypesUrl}`);
  }

  addJobType(jobType: JobType): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/${this.jobTypesUrl}`, jobType);
  }

  removeJobType(id: number): Observable<any> {
    return this.http.delete<number>(`${this.baseUrl}/${this.jobTypesUrl}/${id}`);
  }

  updateJobType(jobTypeToUpdate: JobType): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${this.jobTypesUrl}`, jobTypeToUpdate);
  }

  getJobTypeById(id: number): Observable<JobType> {
    return this.http.get<JobType>(`${this.baseUrl}/${this.jobTypesUrl}/${id}`);
  }
}
