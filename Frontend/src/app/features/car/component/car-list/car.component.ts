import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CarAbstractService } from 'src/app/features/car/services/abstracts/car-abstract.service';
import { Car } from '../../models/car/car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  cars:Car[]
  textFilter:string;
 
  constructor(private router:Router, private carService:CarAbstractService, private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarByBrand(params['id']);
      } else {
        this.getCars();
      }
    });
    
  }

  btnClick() {
    this.router.navigate(['cars'])

   }
  getCars(){
      this.carService.getCars().subscribe(response=>{
        this.cars=response
        console.log(response);
      })
  }
  getCarByBrand(id: number) {
    this.carService.getCarByBrand(id).subscribe((response) => {
      this.cars = response;
      
    });
  }

}   

