import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutsComponent } from './view/produts/produts.component';
import { RegisterProductComponent } from './view/register-product/register-product.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProdutsComponent
  },
  {
    path: 'registerProduct',
    component: RegisterProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
