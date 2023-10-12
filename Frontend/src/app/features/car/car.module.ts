import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './component/car-list/car.component';

import { FormsModule } from '@angular/forms';


import { CarMockService } from './services/concretes/car-mock.service';
import { FilterPipe } from './pipes/filter.pipe';
import { CarAbstractService } from './services/abstracts/car-abstract.service';

@NgModule({
  declarations: [CarComponent,FilterPipe],
  imports: [CommonModule, FormsModule],
  exports: [CarComponent],
  providers:[
    {
    provide: CarAbstractService,
    useClass: CarMockService
    }

  ]}
  )
export class CarModule {}