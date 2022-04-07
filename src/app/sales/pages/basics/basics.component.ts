import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent{
  nameLower:string="marco";
  nameUpper:string="MARCO";
  fullName:string="MARCO Pacheco";
  date:Date =new Date();

}
