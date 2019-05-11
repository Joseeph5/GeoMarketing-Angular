import { Component, OnInit } from '@angular/core';
import { ReportingService } from 'src/app/services/reporting.service';
//import { Reporting } from 'src/app/shared/Reporting';

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
  
  constructor(private reportingservice:ReportingService) { }

  rows:Reporting[];
  displayedColumns: string[] = ['idrapport' , 'facing' ];
  ngOnInit() {
    return this.reportingservice.getData().subscribe(data => {
      this.rows=data
      console.log(this.rows)
     });
  }

}
