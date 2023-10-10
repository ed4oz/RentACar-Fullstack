import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/models/car';


@Injectable({
  providedIn: 'root'
})
export abstract class CarAbstractService {

  abstract getCars(): Observable<Car[]>;
}
