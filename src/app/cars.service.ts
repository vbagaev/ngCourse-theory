import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class CarsService {
  constructor(private http: Http) {
  }

  getCars() {
   return this.http.get('http://localhost:3000/cars')
     .map((response: Response) => response.json());

  }

  addCar(carName: string) {
    const data = {
      name: carName,
      color: 'blue'
    };
    return this.http.post('http://localhost:3000/cars', data)
      .map((response: Response) => response.json());
  }
}
