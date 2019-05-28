import { Component, OnInit } from '@angular/core';
import { vehicule } from 'src/app/shared/vehicule';
import { VehiculeService } from 'src/app/services/vehicule.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent implements OnInit {
  car=new vehicule;
  constructor(public vehiculeService:VehiculeService,private toastr: ToastrService) { }

  ngOnInit() {
  }





  addVehicule(){
    console.log('succès',this.car)
    this.vehiculeService.addVehicule(this.car).subscribe(()=>{
          console.log('succès',this.car)
          this.toastr.success('Ajouter avec succès');
    });
  }

  
}
