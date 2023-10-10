import { Injectable } from '@angular/core';
import { ModelAbstractService } from '../abstracts/model-abstract.service';
import { HttpClient } from '@angular/common/http';
import { Model } from 'src/app/shared/models/model';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModelMockService implements ModelAbstractService{

  apiUrl = 'http://localhost:3000/models';
  constructor(private httpClient: HttpClient) {}

  getModels(): Observable<Model[]> {
    return this.httpClient.get<Model[]>(this.apiUrl);
  }
}
