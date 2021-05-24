import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { ProjectsRoutingModule } from './projects/projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsModule } from './projects/projects.module';

const routes: Routes = [
  { path: '', redirectTo: 'loading', pathMatch: 'full' },
  // { path: '**', redirectTo: 'loading', pathMatch: 'full' },
  // { path: '/', redirectTo: 'loading', pathMatch: 'full' },
  { path: 'loading', component: LoadingPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
