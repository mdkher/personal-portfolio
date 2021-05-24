import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { CustomCursorComponent } from './custom-cursor/custom-cursor.component';
import { ProjectsComponent } from './projects.component';


@NgModule({
  declarations: [CustomCursorComponent, ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
