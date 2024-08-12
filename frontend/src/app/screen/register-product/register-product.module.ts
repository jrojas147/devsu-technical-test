import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterProductComponent } from './register-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from 'src/app/services/product-services/product.service';
import { RegisterRouting } from './register-product.routing';


const declarations = [
  RegisterProductComponent
]
const imports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RegisterRouting
]
const providers = [
  ProductService
]

@NgModule({
  declarations: declarations,
  imports: imports,
  exports: declarations,
  providers: providers
})
export class RegisterProductModule { }
