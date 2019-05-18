import { Component, OnInit,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MissionServiceService } from 'src/app/services/mission-service.service';
import { Reporting } from 'src/app/shared/Reporting';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class ReportingFormComponent implements OnInit {

  // newForm: FormGroup;
  reporting= new Reporting;

  
  
  constructor(public dialogRef: MatDialogRef<ReportingFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    public missionservice:MissionServiceService) {
    
  
  }

  

  ngOnInit() {
  }

    addRapport(){
      console.log(this.data.id+"  ",this.reporting)
    }
}


