import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandAbstractService } from '../abstracts/brand-abstract.service';
import { Brand } from 'src/app/shared/models/brand';


@Injectable({
  providedIn: 'root',
})
export class BrandMockService implements BrandAbstractService {
  apiUrl = 'http://localhost:3000/brands';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.apiUrl);
  }
}