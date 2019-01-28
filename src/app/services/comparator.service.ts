import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComparatorService {
  private cars: BehaviorSubject<Car[]>;

  constructor() {
    this.cars = new BehaviorSubject<Car[]>([]);
  }

  addCarToComparator(car: Car) {
    let cars = this.cars.getValue();
    if (cars.length >= 3) {
      throw new Error('Can not compare more than 3 cars at the same time');
    }
    cars.push(car);
    cars = _.uniqBy(cars, 'id');
    this.cars.next(cars);
  }

  removeCarFromComparator(car: Car) {
    let cars = this.cars.getValue();
    cars = _.filter(cars, c => car.id !== c.id );
    this.cars.next(cars);
  }

  getCars() {
    return this.cars;
  }
}
