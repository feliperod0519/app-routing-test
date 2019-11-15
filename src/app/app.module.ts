import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryDbService, InMemoryWebApiModule } from "angular-in-memory-web-api";
import { DataService } from './data.service';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService),
    ProductDetailComponent,
    ProductListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
