import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskTrackerRoutingModule } from './task-tracker-routing.module';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaskTrackerRoutingModule,
    ToolbarComponent
  ]
})
export class TaskTrackerModule { }
