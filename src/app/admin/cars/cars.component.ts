import { Component, OnInit } from '@angular/core';
import { VehiculeService } from 'src/app/services/vehicule.service';
import { MatDialog } from '@angular/material';
import { AddVehiculeComponent } from '../add-vehicule/add-vehicule.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  editing = {};
  rows:any[];
  constructor(public vehiculeService:VehiculeService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getData();
  }


  getData(){
    return this.vehiculeService.getData().subscribe(data => {
      this.rows=data
      console.log(this.rows)
     });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddVehiculeComponent, {
      width: '2000px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      
    });
  }

}
