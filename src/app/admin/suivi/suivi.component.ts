import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {
  missionId:any;
  constructor(public route:ActivatedRoute,) { }

  ngOnInit() {
  }

  getReportingData(){
    this.route.params.subscribe(params => {
      this.missionId=params['id']
      // this.reportingservice.getData(this.missionId).subscribe(data=>{
      //   this.rows=data
      //   console.log('ssssssdddsss',this.rows)
      // })
    });
   
  }
}
