import { Component, Input } from '@angular/core';
import { Car } from '../../models/car.model';
import { ComparatorService } from '../../services/comparator.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car',
  templateUrl: 'car.component.html',
  styleUrls: ['car.component.scss']
})
export class CarComponent {
  constructor(
    private comparatorService: ComparatorService,
    private toastr: ToastrService
  ) {}

  @Input() car: Car;

  showInfo: Boolean = false;

  addToComparator() {
    try {
      this.comparatorService.addCarToComparator(this.car);
      this.toastr.success(
        `${this.car.brand} ${this.car.model} has been added successfuly`
      );
    } catch (error) {
      this.toastr.error(error);
    }
  }

  toggleShowInfo() {
    this.showInfo = !this.showInfo;
  }
}
