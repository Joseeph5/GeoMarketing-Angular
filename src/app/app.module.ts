import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserComponent } from './admin/user/user.component';
import { PlanningComponent } from './admin/planning/planning.component';
import { MissionsComponent } from './admin/missions/missions.component';
import { ApiServiceService } from './services/api-service.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatStepper, MatStepperModule} from '@angular/material';

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

import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthorizationService } from './services/authorization.service';
// import { AuthenticationService } from './services/authentication.service';

import { MissionComponent } from './driver/mission/mission.component';

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
    MissionComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    MatStepperModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    HttpModule,
    BrowserAnimationsModule,NoopAnimationsModule,MatButtonModule, MatCheckboxModule,
    MatDialogModule,MatFormFieldModule,FormsModule, ReactiveFormsModule,
   
    MatTableModule,
   
    
  ],
  exports: [MatButtonModule, MatCheckboxModule,MatDialogModule,MatFormFieldModule],
  providers: [ApiServiceService,AuthorizationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  }],
  entryComponents:[AddFormComponent,DeleteConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
