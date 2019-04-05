import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserComponent } from './admin/user/user.component';
import { MissionsComponent } from './admin/missions/missions.component';
import { PlanningComponent } from './admin/planning/planning.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'driver',component:UserComponent},
  {path:'mission',component:MissionsComponent},
  {path:'planning',component:PlanningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
