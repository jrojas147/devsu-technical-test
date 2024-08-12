import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutsComponent } from './produts.component';
import { FormsModule } from '@angular/forms';
import { ModalService } from 'src/app/services/modal-services/modal.service';
import { ProductService } from 'src/app/services/product-services/product.service';
import { TableModule } from 'src/app/components/table/table.module';

const declarations = [
  ProdutsComponent
]
const imports = [
  CommonModule,
  FormsModule,
  TableModule
]
const providers = [
  ModalService,
  ProductService
]

@NgModule({
  declarations: declarations,
  imports: imports,
  exports: declarations,
  providers: providers
})
export class ProductsModule { }