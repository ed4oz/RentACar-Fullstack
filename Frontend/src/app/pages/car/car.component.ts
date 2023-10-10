import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { CarMockService } from 'src/app/services/mock-services/concretes/car-mock.service';
import { Car } from 'src/app/shared/models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  cars:Car[]
  showInfo:boolean[]
  constructor(private carService:CarService, private router:Router, private carMockService:CarMockService, private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarsByBrand(params['id']);
      } else {
        this.getCars();
      }
    });
  
  }

  btnClick() {
    this.router.navigate(['mete'])

   }
  getCars(){
      this.carMockService.getCars().subscribe(response=>{
        this.cars=response
        this.initializeShowInfoArray();
      })
  }
  getCarsByBrand(id: number) {
    this.carMockService.getBrandById(id).subscribe((response) => {
      this.cars = response;
      this.initializeShowInfoArray();
    });
  }
  initializeShowInfoArray() {
    this.showInfo = Array(this.cars.length).fill(false);
  }
}   

