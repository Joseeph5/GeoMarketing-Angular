import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  newForm: FormGroup;
  mission:any;
  date_deb:any;    
  date_fin:any;                 
  id_driver:number ;
  id_vehicule:number;
  titleAlert:string = 'This field is required';
  
  constructor(private fb: FormBuilder) {
    this.newForm = fb.group({
      'date_deb': [null, Validators.required],
      'date_fin': [null, Validators.required],
      'id_driver': [null, Validators.required],
      'id_vehicule': [null, Validators.required],
      
    });
  }

  

  ngOnInit() {
  }

  addMission(mission:any){
    console.log('sssssssssss',mission);
  }

}
