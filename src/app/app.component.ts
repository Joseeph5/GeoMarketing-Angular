import { Component, HostListener, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @HostListener('window:scroll', ['$event']) 
  onWindowScroll(event) {
      
      if (window.pageYOffset > 193) {
        let element = document.getElementById('sidebar');
        element.classList.add('affix');
      }else {
        let element = document.getElementById('sidebar');
          element.classList.remove('affix'); 
       }
    }
  title = 'GeoMarketing';
  username="demo";
  password="*demo*";
  constructor(private auth:AuthenticationService) { }

  ngOnInit(){
    this.auth.login(this.username,this.password).subscribe(data => {
      console.log('success',data.token);
     });
  }
}
