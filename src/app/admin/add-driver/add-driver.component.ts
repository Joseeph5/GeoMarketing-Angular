import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Driver } from 'src/app/shared/Driver';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  driver = new Driver
  constructor(private apiService:ApiServiceService) { }

  ngOnInit() {
  }

  addDriver(){
    this.apiService.addDriver(this.driver).subscribe(()=>
    console.log('success '));
    
  }
}
