import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  
  constructor(public apiService:ApiServiceService) { }

  ngOnInit() {
   //return this.apiService.getDataById(1).subscribe(data => this.missionById=data);
  }
}
