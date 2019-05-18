import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/services/tracking.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-planning',
  templateUrl: './add-planning.component.html',
  styleUrls: ['./add-planning.component.css']
})
export class AddPlanningComponent implements OnInit {
  arr:any[] ;
  toppings = new FormControl();
  toppingPoi :number[]=new Array();
  constructor( public trackService:TrackingService) { }

  ngOnInit() {
    this.getPoi();
  }
  getPoi(){
    this.trackService.getPoiData().subscribe(data=>{
      this.arr=data
      
      for(var i=0;i<this.arr.length;i++) {
        this.toppingPoi.push(this.arr[i].name)
        
      } 
    });
  }

  addPlanning(){
    console.log(this.toppings.value)
  }
}
