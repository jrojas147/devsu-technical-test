import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumnComponent } from './column.component';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: ColumnComponent;

  it('should create', () => {
  
    component = new ColumnComponent(new TableComponent());
    expect(component).toBeTruthy();
  });

});
