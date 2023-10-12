import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { CarAbstractService } from '../abstracts/car-abstract.service';
import { HttpClient } from '@angular/common/http';
import { Car } from '../../models/car/car';


@Injectable({
  providedIn: 'root',
})
export  class CarMockService implements CarAbstractService {
  apiUrl = 'http://localhost:3000/cars';

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl); 
  }
  // getBrandById(brandId: number): Observable<Car[]> {
  //   let newPath = `${this.apiUrl}/${brandId}?_expand=model&brandId=${brandId}`;
  //   return this.httpClient.get<Car[]>(newPath).pipe(
  //     map((response: any) => [response])
  //   );
  // }

  getCarByBrand(brandId: number): Observable<Car[]> {
    let url = `${this.apiUrl}?model.brandId=${brandId}`;
    
    return this.httpClient.get<Car[]>(url)
  }

}