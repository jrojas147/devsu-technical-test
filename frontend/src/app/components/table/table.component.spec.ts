import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        TableComponent 
      ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('add column', () => {
  //   const column = {
  //     table: {
  //       pageSize: 1
  //     }
  //   };
  //   expect(component.addColumn(column)).toBeUndefined();
  // });

  it('getData', () => {
    const col = ['id'];
    const row = { id: 1, name: 'joan' };
    const test = component.getData(col, row);
    expect(test).toEqual(1);
  });

  it('getData 2', () => {
    const row = ['id', ];
    const col = [{ name: 'joan' }];
    const test = component.getData(col, row);
    expect(test).toEqual('');
  });



});
