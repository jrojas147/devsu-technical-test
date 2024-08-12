import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProductComponent } from './screen/register-product/register-product.component';

const routes: Routes = [

  {
    loadChildren: () => import('@screen/products/products.module').then((m) => m.ProductsModule),
    path: 'products',
  },


  // {
  //   loadChildren: () => import('@screen/produts/produts.module').then((m) => m.ProductsModule),
  //   path: 'products',
  // },
  {
    loadChildren: () => import('@screen/register-product/register-product.module').then((m) => m.RegisterProductModule),
    path: 'registerProduct',
  },
  {
   // canActivate: [SessionAuthGuard],
    loadChildren: () => import('@screen/register-product/register-product.module').then((m) => m.RegisterProductModule),
    path: 'registerProduct/:id',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
