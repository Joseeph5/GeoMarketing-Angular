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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatDatepickerModule,MatNativeDateModule,
   MatStepperModule,} from '@angular/material';

import { MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule} from '@angular/material/form-field'; 
import { AddFormComponent } from './admin/add-form/add-form.component';
import { GroupsComponent } from './admin/groups/groups.component';
import { CarsComponent } from './admin/cars/cars.component';
import { ProductComponent } from './admin/product/product.component';
import { TrackingComponent } from './admin/tracking/tracking.component';
import { DeleteConfirmDialogComponent } from './Dialog/delete-confirm-dialog/delete-confirm-dialog.component'; 


import {MatTableModule} from '@angular/material'

import { ToastrModule } from 'ngx-toastr';
import { AuthorizationService } from './services/authorization.service';
// import { AuthenticationService } from './services/authentication.service';


import { MissionComponent } from './driver/mission/mission.component';
import { DetailsComponent } from './admin/details/details.component';
import { AddDriverComponent } from './admin/add-driver/add-driver.component';






import { ReportingFormComponent } from './driver/add-form/add-form.component';
import { ReportingComponent } from './admin/reporting/reporting.component';
import { AddVehiculeComponent } from './admin/add-vehicule/add-vehicule.component';
import { AddGroupeComponent } from './admin/add-groupe/add-groupe.component';
import { AddPlanningComponent } from './admin/add-planning/add-planning.component';
import { SuiviComponent } from './admin/suivi/suivi.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    PlanningComponent,
    MissionsComponent,
    AddFormComponent,
    GroupsComponent,
    CarsComponent,
    ProductComponent,
    TrackingComponent,
    DeleteConfirmDialogComponent,


    MissionComponent,
    DetailsComponent,
    AddDriverComponent,
    ReportingFormComponent,
    ReportingComponent,
    AddVehiculeComponent,
    AddGroupeComponent,
    AddPlanningComponent,
    SuiviComponent


  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    
    MatSelectModule,
    MatStepperModule,
    MatDatepickerModule,MatNativeDateModule,
   
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    HttpModule,
    BrowserAnimationsModule,NoopAnimationsModule,MatButtonModule, MatCheckboxModule,
    MatDialogModule,MatFormFieldModule,FormsModule, ReactiveFormsModule,
   
    MatTableModule,
   
    
  ],
  exports: [MatButtonModule, MatCheckboxModule,MatDialogModule,MatFormFieldModule,
    MatDatepickerModule,MatNativeDateModule],
  providers: [ApiServiceService,AuthorizationService,
    ],
  entryComponents:[AddFormComponent,DeleteConfirmDialogComponent,AddDriverComponent,ReportingFormComponent,
    AddGroupeComponent,AddVehiculeComponent,AddPlanningComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
