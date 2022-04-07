import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonComponent } from './pages/not-common/not-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
//pipes
import { CustomUppercase } from './pipes/customUppercase.pipe';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonComponent,
    BasicsComponent,
    OrderComponent,
    //pipes
    CustomUppercase,
    SortPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    NumbersComponent,
    NotCommonComponent,
    BasicsComponent,
    OrderComponent
  ]
})
export class SalesModule { }
