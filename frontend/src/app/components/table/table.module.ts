import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ColumnComponent } from './column.component';



@NgModule({
  declarations: [
      TableComponent, 
      ColumnComponent
    ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    ColumnComponent
  ]
})
export class TableModule { }
