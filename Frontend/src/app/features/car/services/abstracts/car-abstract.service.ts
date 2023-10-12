import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../models/car/car';



@Injectable({
  providedIn: 'root'
})
export abstract class CarAbstractService {

  abstract getCars(): Observable<Car[]>;

  abstract getCarByBrand(brandId:number):Observable<Car[]>
}
