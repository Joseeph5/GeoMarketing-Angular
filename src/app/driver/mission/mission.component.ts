import { Component, OnInit } from '@angular/core';
import { MissionDriverService } from 'src/app/services/mission-driver.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Mission } from 'src/app/shared/Mission';
import { ReportingFormComponent } from '../add-form/add-form.component';
import { PoiService } from 'src/app/services/poi.service';
export interface Mission {
  idmission: number,
  idvehicule: number;
  datedeb: number;
  datefin: number;
  mark: any;
  matricule: any;
}
export interface Poi {
  idpoi: number;
  adress: any;
  adresse: any;
}
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  constructor(private missionservice: MissionDriverService, public dialog: MatDialog, public poiservice: PoiService) {
    
  }
  rows: Mission[];
  displayedColumns: string[] = ['idmission', 'idvehicule', 'datedeb', 'datefin', 'mark', 'matricule'];

  row: Poi[];
  displayedColumn: string[] = ['idpoi', 'adress', 'adresse'];

  ngOnInit() {


    this.getpoi();
    
    return this.missionservice.getData().subscribe(data => {
      this.rows = data
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

  getpoi() {
    return this.poiservice.getData().subscribe(data => {
      this.row = data
      console.log(this.row)
    });
  }
}
