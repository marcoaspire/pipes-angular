import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
//own modules
import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

//change locale
import localEs from "@angular/common/locales/es-MX";
import localFr from "@angular/common/locales/fr-CA";

import { registerLocaleData } from "@angular/common";
registerLocaleData(localEs);
registerLocaleData(localFr);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    PrimeNgModule,
    SharedModule,
    SalesModule
  ],
  providers: [
    //change language
    {
      provide: LOCALE_ID, useValue:'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
