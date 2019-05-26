import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddGroupeComponent } from '../add-groupe/add-groupe.component';
import { GroupService } from 'src/app/services/group.service';
import { DialogService } from 'src/app/services/dialog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups:any[];
  editing = {}; 
  constructor(public dialog: MatDialog,public groupService:GroupService,public dialogServer:DialogService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getGroups();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddGroupeComponent, {
      width: '1500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      
    });
  }

  getGroups(){
    return this.groupService.getData().subscribe(data => {
      this.groups=data
      console.log(this.groups)
     });
  }

  delete(id:any){

    console.log('sssssssssss',id)
    this.dialogServer.openDialogConfirm('êtes-vous sûr de supprimer...')
    .afterClosed().subscribe(res =>{
      if(res){
        this.groupService.delete(id).subscribe(()=>{
          this.toastr.warning('Supprimé avec succès');
         
          
        });
        
      }
    });
    
  }
}
