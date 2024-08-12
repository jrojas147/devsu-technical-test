import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from '../modal/modal.module';

const declarations = [
  TableComponent
]
const imports = [
  CommonModule,
  FormsModule,
  ModalModule
]

@NgModule({
  declarations: declarations,
  imports: imports,
  exports: declarations
})

export class TableModule { }
