import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutsComponent } from './produts.component';
import { FormsModule } from '@angular/forms';
import { ModalService } from 'src/app/services/modal-services/modal.service';
import { ProductService } from 'src/app/services/product-services/product.service';
import { TableModule } from 'src/app/components/table/table.module';



@NgModule({
  declarations: [
    ProdutsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule
  ],
  providers: [
    ModalService,
    ProductService
  ]
})
export class ProductsModule { }
