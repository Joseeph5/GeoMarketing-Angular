import { Component, OnInit } from '@angular/core';
import { MissionDriverService} from 'src/app/services/mission-driver.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Mission } from 'src/app/shared/Mission';
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
}
