import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './screen/shared/header/header.component';
import { FooterComponent } from './screen/shared/footer/footer.component';
import { ProdutsComponent } from './screen/produts/produts.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from './components/table/table.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationModule } from './components/pagination/pagination.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { ModalModule } from './components/modal/modal.module';
import { RegisterProductComponent } from './screen/register-product/register-product.component';
import { ProductsModule } from './screen/produts/products.module';
import { RegisterProductModule } from './screen/register-product/register-product.module';

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
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    ProductsModule,
    RegisterProductModule
 
  ],
  providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
