import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';
import { ToastrService } from 'ngx-toastr';
import { Group } from 'src/app/shared/Group';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-add-groupe',
  templateUrl: './add-groupe.component.html',
  styleUrls: ['./add-groupe.component.css']
})
export class AddGroupeComponent implements OnInit {
  group= new Group;
  constructor(public groupService:GroupService,private toastr: ToastrService) { }

  ngOnInit() {
  }




  addGroup(){
    console.log('succès',this.group)
    this.groupService.addGroup(this.group).subscribe(()=>{
          console.log('succès',this.group)
          this.toastr.success('Ajouter avec succès');
          });
  }

  
}
