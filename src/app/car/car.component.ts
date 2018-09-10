import { Component, Input, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

@Input('carItem')
car: {name: string, year: number};

@ContentChild('carHeading')  carHeading: ElementRef;

constructor() {
	console.log('constructor');
}

ngOnInit() {
	console.log('ngOnInit');
}

}
