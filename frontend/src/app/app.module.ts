import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './screen/shared/header/header.component';
import { FooterComponent } from './screen/shared/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from './components/table/table.module';
import { PaginationModule } from './components/pagination/pagination.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './components/modal/modal.module';
import { RegisterProductModule } from './screen/register-product/register-product.module';
import { ModalService } from './services/modal-services/modal.service';
import { ProductService } from './services/product-services/product.service';
import { UtilService } from './services/util-services/util.service';
import { ProductsComponent } from './screen/products/products.component';
import { ProductsModule } from '@screen/products/products.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    PaginationModule,
    ModalModule,
    RegisterProductModule,
    ProductsModule,
 
  ],
  providers: [
    ModalService,
    ProductService,
    UtilService
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
