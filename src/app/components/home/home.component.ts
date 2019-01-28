import { Component } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/car.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected cars: Observable<Car[]>;
  constructor(private carsService: CarsService) {
    this.cars = carsService.getCars();
  }

  filterByBrand(search: string) {
    this.cars = this.carsService.filerByBrand(search);
  }
}
