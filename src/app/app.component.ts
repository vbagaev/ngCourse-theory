import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent implements OnInit{

  constructor(private service: CarsService) {

  }

  cars = [];


  ngOnInit() {
  	this.cars = this.service.cars;
  }

}
