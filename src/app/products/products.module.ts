import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';
import { FormsModule } from '@angular/forms';
import { ProductEffects } from '../products/state/product.effects';
import { EffectsModule } from '@ngrx/effects';
const routes: Routes = [
  {
    path: '', component: ProductsComponent
  }
];

@NgModule({
  declarations: [ProductsComponent, ListComponent, EditComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects]),
    FormsModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
