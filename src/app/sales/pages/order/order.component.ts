import { Component, OnInit } from '@angular/core';
import { Car, Color } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {

  uppercase:boolean = false;
  sortBy:string = 'none';
  cars:Car[]=[
    {
      name: "Camaro",
      year: 2020,
      brand:"Chevrolet",
      color: Color.green
    },
    {
      name: "Leon",
      year: 2021,
      brand:"Ibiza",
      color: Color.black
    },
    {
      name: "Cx5",
      year: 2022,
      brand:"Mazda",
      color: Color.green
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

  change(){
    this.uppercase = !this.uppercase ;
  }


  changeSortBy(option:string){
    this.sortBy = option;
  }


}
