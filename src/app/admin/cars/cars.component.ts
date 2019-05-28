import { Component, OnInit } from '@angular/core';
import { VehiculeService } from 'src/app/services/vehicule.service';
import { MatDialog } from '@angular/material';
import { AddVehiculeComponent } from '../add-vehicule/add-vehicule.component';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  editing = {};
  rows:any[];
  constructor(public vehiculeService:VehiculeService,public dialog: MatDialog,
    public dialogServer:DialogService,private toastr: ToastrService) { }

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

  delete(id:any){
    this.dialogServer.openDialogConfirm('êtes-vous sûr de supprimer...')
    .afterClosed().subscribe(res =>{
      console.log(id)
      if(res){
        this.vehiculeService.delete(id).subscribe(()=>{
          this.toastr.success('Supprimé avec succès');
        });
        
      } 
    });
    
  }

}
