import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { TestRouting } from './products.routing';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'src/app/components/table/table.module';
import { ModalService } from 'src/app/services/modal-services/modal.service';
import { ProductService } from 'src/app/services/product-services/product.service';

const declarations = [
  ProductsComponent
]

const imports = [
  CommonModule,
  TestRouting,
  FormsModule,
  TableModule
]

const ptoviders = [
  ModalService,
  ProductService
]

@NgModule({
  declarations: declarations,
  imports: imports,
  exports: declarations,
  providers: ptoviders
})
export class ProductsModule { }
