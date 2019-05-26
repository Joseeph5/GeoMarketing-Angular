import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/services/tracking.service';
import { FormControl } from '@angular/forms';
import { PlanningService } from 'src/app/services/planning.service';
import { Planning } from 'src/app/shared/Planning';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-planning',
  templateUrl: './add-planning.component.html',
  styleUrls: ['./add-planning.component.css']
})
export class AddPlanningComponent implements OnInit {
  poiList:any[] ;
 
  toppings = new FormControl();
  toppingPoi :number[]=new Array();
  planning= new Planning
  constructor( public trackService:TrackingService, public planningService: PlanningService,private toastr: ToastrService) { }

  ngOnInit() {
    this.getPoi();

  }
  getPoi(){
    this.trackService.getPoiData().subscribe(data=>{
      this.poiList=data
      console.log(this.poiList)
    });
  }

  addPlanning(){
    console.log(this.toppings.value)
    this.planning.poi=this.toppings.value;
      console.log('sssssssssss',this.planning);

    this.planningService.addplanning(this.planning).subscribe(()=>{
          console.log('succès')
          this.toastr.success('Ajouter avec succès');
          });
  }
 
}
