import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserComponent } from './admin/user/user.component';
import { MissionsComponent } from './admin/missions/missions.component';
import { PlanningComponent } from './admin/planning/planning.component';
import { GroupsComponent } from './admin/groups/groups.component';
import { CarsComponent } from './admin/cars/cars.component';
import { ProductComponent } from './admin/product/product.component';
import { TrackingComponent } from './admin/tracking/tracking.component';
import { MissionComponent } from './driver/mission/mission.component';
import { DetailsComponent } from './admin/details/details.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'driver',component:UserComponent},
  {path:'missions',component:MissionsComponent},
  {path:'planning',component:PlanningComponent},
  {path:'cars',component:CarsComponent},
  {path:'groups',component:GroupsComponent},
  {path:'product',component:ProductComponent},
  {path:'tracking',component:TrackingComponent},
  {path:'drivermission/:id',component:MissionComponent},
  {path:'details',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
