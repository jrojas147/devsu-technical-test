import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/shared/header/header.component';
import { FooterComponent } from './view/shared/footer/footer.component';
import { ProdutsComponent } from './view/produts/produts.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from './components/table/table.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationModule } from './components/pagination/pagination.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { ModalModule } from './components/modal/modal.module';
import { RegisterProductComponent } from './view/register-product/register-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProdutsComponent,
    RegisterProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    PaginationModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule
 
  ],
  providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
