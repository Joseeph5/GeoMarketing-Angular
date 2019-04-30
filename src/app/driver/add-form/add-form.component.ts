import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MissionServiceService } from 'src/app/services/mission-service.service';
import { Mission } from 'src/app/shared/Mission';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  // newForm: FormGroup;
  mission= new Mission;

  date_deb:any;    
  date_fin:any;                 
  id_driver:number ;
  id_vehicule:number;
  titleAlert:string = 'This field is required';
  
  constructor(private fb: FormBuilder,public missionservice:MissionServiceService) {
    
    // this.newForm = fb.group({
    //   'date_deb': [null, Validators.required],
    //   'date_fin': [null, Validators.required],
    //   'id_driver': [null, Validators.required],
    //   'id_vehicule': [null, Validators.required],
      
    // });
  }

  

  ngOnInit() {
  }

    addMission(){
      console.log('sssssssssss',this.mission);
      this.missionservice.postMission(this.mission).subscribe(()=>
      console.log('success '));
    }
}


