import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  bookList=5;

  drivers=5;
  fakeArray = new Array(10); 


  ngOnInit() {
  }

}
