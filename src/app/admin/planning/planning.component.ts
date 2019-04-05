import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  www:any[]= [
    {name : "abc", section :'A', phoneNumber : '123',studentID : 101 },
    {name : "xyz", section :'B', phoneNumber : '456',studentID : 102 },
    {name : "mno", section :'C', phoneNumber : '789',studentID : 103 },
  
      ];
  editing = {};
  constructor(public apiService:ApiServiceService) {
    
   }

  ngOnInit() {
    
  }
}
