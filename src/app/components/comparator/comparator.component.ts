import { Component } from '@angular/core';
import { ComparatorService } from '../../services/comparator.service';
import { Car } from '../../models/car.model';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comparator',
  templateUrl: 'comparator.component.html',
  styleUrls: ['comparator.component.scss']
})
export class ComparatorComponent {
  protected comparableCars: Observable<Car[]>;

  constructor(
    private comparatorService: ComparatorService,
    private toastr: ToastrService
  ) {
    this.comparableCars = comparatorService.getCars();
  }

  removeFromComparator(car: Car) {
    this.comparatorService.removeCarFromComparator(car);
    this.toastr.success(`${car.brand} ${car.model} removed correctly`);
  }
}
