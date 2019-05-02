import { Component, OnInit } from '@angular/core';
import { MissionDriverService} from 'src/app/services/mission-driver.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Mission } from 'src/app/shared/Mission';
import { ReportingFormComponent } from '../add-form/add-form.component';
export interface Mission {
  idmission :number,
  idvehicule: number;
  datedeb: number;
  datefin: number;
  
}
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  constructor(private missionservice:MissionDriverService,public dialog: MatDialog){
    
   
  } 
  rows:Mission[];
 displayedColumns: string[] = ['idmission','idvehicule', 'datedeb', 'datefin'];

  ngOnInit() {
    
    return this.missionservice.getData().subscribe(data => {
      this.rows=data
      console.log(this.rows)
  });
  
}
openDialog(): void {
  const dialogRef = this.dialog.open(ReportingFormComponent, {
    width: '1000px',
    data: {}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    
  });
}
}
