import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from '../app/product-list/product-list.component';
import { ProductDetailComponent } from '../app/product-detail/product-detail.component';

import { CommonModule } from '@angular/common';

const routes: Routes = [
                        {path: 'products' , component: ProductListComponent},
                        {path: 'product/:id' , component: ProductDetailComponent},
                        { path: '',  redirectTo: '/products', pathMatch: 'full' }
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }



