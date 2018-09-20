import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  cars = [];

  constructor(private carService: CarsService) {}

  ngOnInit() {

  }

  loadCars() {
    this.carService.getCars().subscribe((response) => {
      console.log(response);
    });
  }
}
