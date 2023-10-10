import { Injectable } from '@angular/core';
import { Model } from 'src/app/shared/models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ModelAbstractService {

  abstract getModels(): Observable<Model[]>;
}

