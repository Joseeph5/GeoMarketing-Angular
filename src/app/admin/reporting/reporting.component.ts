import { Component, OnInit } from '@angular/core';
import { ReportingService } from 'src/app/services/reporting.service';
import { ActivatedRoute } from '@angular/router';


export class Reporting {
  idrapport: number;
  idmission:number;
  qte:number;
  facing:number;
  ref:number;
}

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})

export class ReportingComponent implements OnInit {
  driverId:any;
  constructor(private reportingservice:ReportingService,public route:ActivatedRoute) { }

  rows:Reporting[];
  displayedColumns: string[] = ['idrapport' , 'facing' ];
  ngOnInit() {

    
  }

  getReportingData(){
    this.route.params.subscribe(params => {
      this.driverId=params['id']
      this.reportingservice.getData(this.driverId).subscribe(data=>{
        this.rows=data
      })
    });
   
  }

}
