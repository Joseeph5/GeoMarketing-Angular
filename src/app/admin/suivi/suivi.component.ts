import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuiviService } from 'src/app/services/suivi.service';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {
  missionId:any;
  rows:any;
  constructor(public route:ActivatedRoute,public suiviService:SuiviService) { }

  ngOnInit() {
    this.getSuiviData();
  }

  getSuiviData(){
    this.route.params.subscribe(params => {
      this.missionId=params['id']
      this.suiviService.getData(this.missionId).subscribe(data=>{
        this.rows=data
        console.log('ssssssdddsss',this.rows)
      })
    });
   
  }
}
