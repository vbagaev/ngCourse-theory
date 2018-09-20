import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';


interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  cars: Cars[] = [];

  constructor(private carService: CarsService) {}

  ngOnInit() {

  }

  loadCars() {
    this.carService.getCars().subscribe((cars: Cars[]) => {

      this.cars = cars;
    });
  }
}
