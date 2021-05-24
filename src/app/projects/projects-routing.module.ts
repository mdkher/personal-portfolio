import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomCursorComponent } from './custom-cursor/custom-cursor.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'custom-cursor', pathMatch: 'full' },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'custom-cursor', component: CustomCursorComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
