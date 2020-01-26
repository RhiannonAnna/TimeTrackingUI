import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NaviComponent } from './navi/navi.component';
import { MaterialModule } from './shared/material.module';
import { TimeTrackingGroupsComponent } from './pages/time-tracking-groups/time-tracking-groups.component';
import { TimeTrackingGroupLogsComponent } from './pages/time-tracking-group-logs/time-tracking-group-logs.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    TimeTrackingGroupsComponent,
    TimeTrackingGroupLogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
