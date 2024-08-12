import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductRouting } from './products.routing';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'src/app/components/table/table.module';
import { ModalService } from 'src/app/services/modal-services/modal.service';
import { ProductService } from 'src/app/services/product-services/product.service';
import { ToastModule } from 'src/app/components/toast/toast.module';

const declarations = [
  ProductsComponent
]

const imports = [
  CommonModule,
  ProductRouting,
  FormsModule,
  TableModule,
  ToastModule
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
