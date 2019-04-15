import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
