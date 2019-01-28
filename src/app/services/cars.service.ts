import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class CarsService {
  private cars: Observable<Car[]>;

  constructor(private httpClient: HttpClient) {
    this.cars = this.httpClient.get<Car[]>('assets/data/cars.json');
  }

  filerByBrand(search: string) {
    return this.cars.pipe(
      map(cars =>
        cars.filter(car =>
          car.brand.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }

  getCars() {
    return this.cars;
  }
}
