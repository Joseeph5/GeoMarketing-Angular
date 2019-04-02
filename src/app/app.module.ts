import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserComponent } from './admin/user/user.component';
import { PlanningComponent } from './admin/planning/planning.component';
import { MissionsComponent } from './admin/missions/missions.component';
import { ApiServiceService } from './services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    PlanningComponent,
    MissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,HttpModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
