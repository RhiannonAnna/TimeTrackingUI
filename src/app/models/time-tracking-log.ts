export class TimeTrackingGroupLogs {
    id: number;
    guid: string;
    description: string;
    startTime: Date;
    startMethodTime: Date;
    endTime: Date;
    totalTime: number;
    methodTime: number;
    job: string;
    jobTypeId: number;

    constructor() {
        this.id = 0;
        this.guid = "";
        this.description = "";
        this.startTime = new Date();
        this.startMethodTime = new Date();
        this.endTime = new Date();
        this.totalTime = 0;
        this.methodTime = 0;
        this.job = "";
        this.jobTypeId = 0;
    }
}