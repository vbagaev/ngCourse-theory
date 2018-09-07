import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {


  carYear = 2017;

  @Output('onAddCar')
  carEmitter = new EventEmitter<{name: string, year: number}>();
  @ViewChild('carYearInput') carYearInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

    addCar(carNameEl) {


    this.carEmitter.emit({
    	name: carNameEl.value,
    	year: +this.carYearInput.nativeElement.value
    });
    carNameEl.value = '';
    this.carYear = 2017;
    this.carYearInput.nativeElement.value = 2017;

  }


}
