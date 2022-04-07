import { Component, OnInit } from '@angular/core';
import { interval } from "rxjs";
@Component({
  selector: 'app-not-common',
  templateUrl: './not-common.component.html',
  styles: [
  ]
})
export class NotCommonComponent{

  //i18nSelect
  name:string='Marco';
  sex:string = 'masculine';

  map={
    'masculine': 'his',
    'femenine': 'her'
  }
  //i18nPlural
  customers: string[] =[ 'Maria','Pedro','Ivonne','Marco'];
  customersMap = {
    '=0': 'there is not any customer waiting.',
    '=1': 'there is one customer waiting.',
    'other' : 'there are # customers waiting'
  }

  delete(){
    this.customers.pop();
    console.log(this.customers);
    
    
  }
  change(){
    this.name="Ivonne";
    this.sex="femenine"
   
  }

  //jkey value
  person={
    name:'Marco',
    age:25,
    city:'Puebla'
  }
  //json Pipe
  heroes =
  [
    {
      name:'Superman',
      real:'Clark ken'
    },
    {
      name: 'Spiderman',
      real: 'Peter parker'
    },
    {
      name: 'Aquaman',
      real: 'Arthur Curry'
    }
  ]
  //Async pipe
  observable = interval(1000); //0,1,2,...

  valuePromise = new Promise( (res,rej) => {
    setTimeout(()=>{
      res('primise ejecuted');
      
    },3500);
  });
}
