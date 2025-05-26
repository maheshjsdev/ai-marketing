import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { SiteAnalyticsComponent } from './site-analytics/site-analytics.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: ProjectDashboardComponent },
  { path: 'analytics', component: SiteAnalyticsComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    ProjectDashboardComponent,
    SiteAnalyticsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {}
